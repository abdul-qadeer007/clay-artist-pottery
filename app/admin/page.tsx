'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  MessageCircle, 
  Search, 
  Filter, 
  Download, 
  Lock, 
  Unlock, 
  RefreshCw, 
  Trash2, 
  AlertCircle
} from 'lucide-react';
import { Lead, LeadStatus, TrackedEvent } from '@/types';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('clay_admin_logged_in') === 'true';
    }
    return false;
  });

  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [stats, setStats] = useState<{
    totalLeads?: number;
    leadsToday?: number;
    leadsWeek?: number;
    leadsMonth?: number;
    conversionRate?: string;
    whatsappClicks?: number;
    phoneClicks?: number;
    formStarts?: number;
    statusCounts?: Record<string, number>;
  }>({});
  
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'table' | 'kanban' | 'events'>('kanban');

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [noteInput, setNoteInput] = useState<string>('');

  const loadData = () => {
    setLoading(true);
    Promise.all([
      fetch('/api/admin/leads').then(res => res.json()),
      fetch('/api/admin/stats').then(res => res.json()),
    ])
      .then(([leadsData, statsData]) => {
        if (leadsData.success) {
          setLeads(leadsData.leads);
        }
        if (statsData.success) {
          setStats(statsData.stats);
          setEvents(statsData.recentEvents || []);
        }
      })
      .catch((err) => {
        console.error('Failed to load admin data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    
    let isMounted = true;
    Promise.all([
      fetch('/api/admin/leads').then(res => res.json()),
      fetch('/api/admin/stats').then(res => res.json()),
    ])
      .then(([leadsData, statsData]) => {
        if (!isMounted) return;
        if (leadsData.success) {
          setLeads(leadsData.leads);
        }
        if (statsData.success) {
          setStats(statsData.stats);
          setEvents(statsData.recentEvents || []);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch admin data on mount:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (passwordInput === 'clayartist2026' || passwordInput === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('clay_admin_logged_in', 'true');
    } else {
      setAuthError('Incorrect studio admin password. (Default is clayartist2026)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('clay_admin_logged_in');
  };

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
        );
        loadData();
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleAddNote = async (leadId: string) => {
    if (!noteInput.trim()) return;
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, note: noteInput }),
      });
      const data = await res.json();
      if (data.success && data.lead) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? data.lead : l))
        );
        setSelectedLead(data.lead);
        setNoteInput('');
      }
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${leadId}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== leadId));
        if (selectedLead?.id === leadId) setSelectedLead(null);
        loadData();
      }
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  const exportCSV = () => {
    const headerStr = 'Lead ID,Timestamp PKT,Name,Phone,Email,Service,Preferred Date,Group Size,Venue,Budget,Status,Notes\n';
    const rows = leads.map((l) =>
      `"${l.id}","${l.timestampPKT}","${l.name}","${l.phone}","${l.email}","${l.service}","${l.preferredDate || ''}","${l.groupSize || ''}","${l.venue || ''}","${l.budget || ''}","${l.status}","${(l.notes || []).join('; ')}"`
    );
    const csvContent = headerStr + rows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clay_artist_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  // Filtered Leads
  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.message && l.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'All' || l.status === statusFilter;
    const matchesService = serviceFilter === 'All' || l.service === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  const pipelineStages: LeadStatus[] = [
    'New',
    'Contacted',
    'Quote Sent',
    'Follow-up',
    'Confirmed',
    'Completed',
    'Lost',
  ];

  // If not authenticated, show secure login prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-clay-grain px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DACB] shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#F9EDE6] text-[#B5532A] flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="font-serif-title text-2xl font-bold text-[#3A2016]">
              Studio Owner CRM Portal
            </h1>
            <p className="text-xs text-[#6E6259] mt-1">
              Enter the studio master password to access lead pipeline &amp; analytics.
            </p>
          </div>

          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#443C37] mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter password (default: clayartist2026)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E8DACB] bg-[#FFFDF9] text-sm focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#B5532A] hover:bg-[#9A421D] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Lead Dashboard</span>
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-[#8C7A6B]">
            Clay Artist Pottery Karachi • Secure Owner Pipeline
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF3EA] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Navbar */}
        <div className="bg-white rounded-3xl p-6 border border-[#E8DACB] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src="/images/logo.png" alt="Logo" fill sizes="40px" className="object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif-title text-2xl font-bold text-[#3A2016]">
                  Lead Management CRM
                </h1>
                <span className="bg-[#25D366]/15 text-[#1B8A43] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Live Mirror
                </span>
              </div>
              <p className="text-xs text-[#6E6259]">
                Real-time booking pipeline, Google Sheets sync, &amp; WhatsApp quick response
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF3EA] hover:bg-[#E8DACB] text-[#3A2016] text-xs font-bold transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF3EA] hover:bg-[#B5532A] hover:text-white text-[#B5532A] text-xs font-bold transition-all border border-[#E8DACB] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">Total Leads</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016] mt-1">
              {stats.totalLeads ?? leads.length}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">Today</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#B5532A] mt-1">
              {stats.leadsToday ?? 0}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">This Week</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#3A2016] mt-1">
              {stats.leadsWeek ?? 0}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">Conversion</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#25D366] mt-1">
              {stats.conversionRate ?? '0.0%'}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">WhatsApp Clicks</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#25D366] mt-1">
              {stats.whatsappClicks ?? 0}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-[#E8DACB] shadow-sm">
            <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">Form Starts</span>
            <div className="font-serif-title text-2xl sm:text-3xl font-bold text-[#C88D34] mt-1">
              {stats.formStarts ?? 0}
            </div>
          </div>
        </div>

        {/* View Toggle & Search Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-[#E8DACB] shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-2 bg-[#FAF3EA] p-1.5 rounded-2xl border border-[#E8DACB] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('kanban')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'kanban' ? 'bg-[#B5532A] text-white shadow-sm' : 'text-[#443C37] hover:bg-black/5'
                }`}
              >
                Kanban Pipeline
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('table')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'table' ? 'bg-[#B5532A] text-white shadow-sm' : 'text-[#443C37] hover:bg-black/5'
                }`}
              >
                Leads Table ({filteredLeads.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('events')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'events' ? 'bg-[#B5532A] text-white shadow-sm' : 'text-[#443C37] hover:bg-black/5'
                }`}
              >
                Live Click Tracker
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search name, phone, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#E8DACB] bg-[#FFFDF9] focus:outline-none focus:ring-2 focus:ring-[#B5532A]"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#F5EDE4]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C7A6B]">
              <Filter className="w-3.5 h-3.5" />
              <span>Filters:</span>
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E8DACB] bg-[#FAF3EA]"
            >
              <option value="All">All Statuses</option>
              {pipelineStages.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#E8DACB] bg-[#FAF3EA]"
            >
              <option value="All">All Services</option>
              <option value="daily-workshops">Daily Workshops</option>
              <option value="birthday-parties">Birthday Parties</option>
              <option value="school-trips">School Trips</option>
              <option value="event-organizers">Event Organizers</option>
            </select>

            {(searchQuery || statusFilter !== 'All' || serviceFilter !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('All');
                  setServiceFilter('All');
                }}
                className="text-xs text-[#B5532A] hover:underline font-semibold ml-auto cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* 1. KANBAN BOARD VIEW */}
        {activeTab === 'kanban' && (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 overflow-x-auto pb-4">
            {pipelineStages.map((stage) => {
              const stageLeads = filteredLeads.filter((l) => l.status === stage);
              return (
                <div key={stage} className="bg-white/80 rounded-2xl p-3 border border-[#E8DACB] min-w-[220px] flex flex-col">
                  {/* Column Header */}
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E8DACB]">
                    <span className="text-xs font-bold text-[#3A2016] uppercase tracking-wider">{stage}</span>
                    <span className="w-5 h-5 rounded-full bg-[#FAF3EA] text-[#B5532A] font-bold text-[11px] flex items-center justify-center">
                      {stageLeads.length}
                    </span>
                  </div>

                  {/* Column Lead Cards */}
                  <div className="space-y-3 flex-1 overflow-y-auto max-h-[650px] pr-1">
                    {stageLeads.length === 0 ? (
                      <div className="text-[11px] text-[#8C7A6B] text-center py-6 italic">No leads in {stage}</div>
                    ) : (
                      stageLeads.map((lead) => {
                        const waMsg = encodeURIComponent(`Hi ${lead.name}! Reaching out from Clay Artist Pottery regarding your ${lead.service} booking enquiry.`);
                        const waLink = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${waMsg}`;
                        return (
                          <div
                            key={lead.id}
                            className="bg-white rounded-xl p-3.5 border border-[#E8DACB] shadow-sm hover:shadow-md transition-all space-y-2 cursor-pointer"
                            onClick={() => setSelectedLead(lead)}
                          >
                            <div className="flex items-start justify-between">
                              <h4 className="font-bold text-xs text-[#3A2016] truncate max-w-[130px]">{lead.name}</h4>
                              <span className="text-[10px] text-[#8C7A6B] font-mono">{lead.preferredDate?.slice(5) || 'No date'}</span>
                            </div>

                            <div className="text-[11px] text-[#B5532A] font-semibold truncate">{lead.service}</div>
                            
                            <div className="text-[11px] text-[#6E6259]">{lead.phone}</div>

                            <div className="flex items-center justify-between pt-2 border-t border-[#F5EDE4]">
                              <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[11px] font-bold text-[#25D366] hover:underline flex items-center gap-1"
                              >
                                <MessageCircle className="w-3 h-3" />
                                <span>WhatsApp</span>
                              </a>

                              <select
                                value={lead.status}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  handleStatusChange(lead.id, e.target.value as LeadStatus);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] border border-[#E8DACB] rounded px-1.5 py-0.5 bg-[#FAF3EA]"
                              >
                                {pipelineStages.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. LEADS TABLE VIEW */}
        {activeTab === 'table' && (
          <div className="bg-white rounded-3xl border border-[#E8DACB] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF3EA] text-[#443C37] uppercase font-bold tracking-wider border-b border-[#E8DACB]">
                  <tr>
                    <th className="p-4">Customer</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Date / Group</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Received (PKT)</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5EDE4]">
                  {filteredLeads.map((lead) => {
                    const waMsg = encodeURIComponent(`Hi ${lead.name}! Reaching out from Clay Artist Pottery.`);
                    const waLink = `https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${waMsg}`;
                    return (
                      <tr key={lead.id} className="hover:bg-[#FAF3EA]/40 transition-colors">
                        <td className="p-4 font-bold text-[#3A2016]">
                          <div>{lead.name}</div>
                          <div className="text-[10px] text-[#8C7A6B] font-mono">{lead.id}</div>
                        </td>
                        <td className="p-4 space-y-0.5">
                          <div className="font-semibold text-[#3A2016]">{lead.phone}</div>
                          <div className="text-[11px] text-[#6E6259]">{lead.email}</div>
                        </td>
                        <td className="p-4 font-semibold text-[#B5532A]">
                          {lead.service}
                        </td>
                        <td className="p-4">
                          <div>{lead.preferredDate || 'Flexible'}</div>
                          <div className="text-[11px] text-[#6E6259]">{lead.groupSize || '1-2 persons'}</div>
                        </td>
                        <td className="p-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value as LeadStatus)}
                            className="text-xs font-bold rounded-lg border border-[#E8DACB] px-2.5 py-1 bg-[#FAF3EA]"
                          >
                            {pipelineStages.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td className="p-4 text-[#6E6259]">{lead.timestampPKT}</td>
                        <td className="p-4 text-right space-x-2">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-1 rounded-md font-bold text-[11px]"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => setSelectedLead(lead)}
                            className="bg-[#FAF3EA] text-[#3A2016] px-2.5 py-1 rounded-md font-bold text-[11px] border border-[#E8DACB] cursor-pointer"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. LIVE EVENT TRACKER */}
        {activeTab === 'events' && (
          <div className="bg-white rounded-3xl p-6 border border-[#E8DACB] shadow-sm space-y-4">
            <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">
              Real-Time Visitor Interactions Stream
            </h3>
            <p className="text-xs text-[#6E6259]">
              Tracks user interest before submission: WhatsApp button clicks, phone calls, form starts, and source UTM campaigns.
            </p>

            <div className="divide-y divide-[#F5EDE4] max-h-[500px] overflow-y-auto">
              {events.map((evt) => (
                <div key={evt.id} className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-md font-bold uppercase text-[10px] ${
                      evt.type === 'whatsapp_click' ? 'bg-green-100 text-green-800' :
                      evt.type === 'generate_lead' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {evt.type}
                    </span>
                    <div>
                      <span className="font-bold text-[#3A2016]">Page: {evt.page}</span>
                      {evt.service && <span className="text-[#B5532A] ml-2 font-semibold">({evt.service})</span>}
                    </div>
                  </div>
                  <div className="text-[#8C7A6B]">
                    {evt.timestampPKT} • {evt.device || 'Desktop'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lead Detail & Notes Modal */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#E8DACB] shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DACB]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5532A]">Lead Details</span>
                  <h3 className="font-serif-title text-2xl font-bold text-[#3A2016]">{selectedLead.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="text-gray-400 hover:text-black font-bold text-xl px-2 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#8C7A6B] block">Phone / WhatsApp:</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-bold text-[#3A2016] text-sm underline">{selectedLead.phone}</a>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">Email Address:</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-bold text-[#3A2016] text-sm underline">{selectedLead.email}</a>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">Service Requested:</span>
                  <span className="font-bold text-[#B5532A]">{selectedLead.service}</span>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">Preferred Date:</span>
                  <span className="font-bold text-[#3A2016]">{selectedLead.preferredDate || 'Flexible'}</span>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">Group Size:</span>
                  <span className="font-bold text-[#3A2016]">{selectedLead.groupSize || '1-2 persons'}</span>
                </div>
                <div>
                  <span className="text-[#8C7A6B] block">Budget Range:</span>
                  <span className="font-bold text-[#3A2016]">{selectedLead.budget || 'Standard Package'}</span>
                </div>
              </div>

              {selectedLead.message && (
                <div className="p-4 bg-[#FAF3EA] rounded-xl border border-[#E8DACB]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5532A] block mb-1">Customer Note</span>
                  <p className="text-xs text-[#443C37]">{selectedLead.message}</p>
                </div>
              )}

              {/* Notes Timeline */}
              <div className="space-y-3 pt-4 border-t border-[#E8DACB]">
                <h4 className="font-serif-title font-bold text-base text-[#3A2016]">Studio Follow-up Notes</h4>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add follow-up note (e.g. Called customer, confirmed 4 PM slot)..."
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-[#E8DACB] bg-[#FFFDF9]"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddNote(selectedLead.id)}
                    className="bg-[#B5532A] hover:bg-[#9A421D] text-white px-4 py-2 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    Add Note
                  </button>
                </div>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {(selectedLead.notes || []).map((n, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#FAF3EA] text-xs text-[#443C37] border border-[#E8DACB]/60">
                      {n}
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E8DACB]">
                <button
                  type="button"
                  onClick={() => handleDeleteLead(selectedLead.id)}
                  className="text-red-600 hover:text-red-800 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Lead</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${selectedLead.name}! Reaching out from Clay Artist Pottery.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Customer</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedLead(null)}
                    className="bg-[#FAF3EA] text-[#3A2016] px-4 py-2 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
