import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Flame, 
  Award, 
  ArrowRight,
  Smile,
  CheckCircle2
} from 'lucide-react';
import { SectionEyebrow } from '@/components/SectionEyebrow';

export const metadata: Metadata = {
  title: 'About Clay Artist Pottery Studio Karachi | Our Story & Craft',
  description: 'Learn about Clay Artist Pottery Studio in Clifton Karachi. Our master potters, ceramic philosophy, high-temperature kiln firing, and mission to foster mindful creativity.',
};

export default function AboutPage() {
  const values = [
    {
      title: "Mindful Tactile Therapy",
      icon: <Heart className="w-6 h-6 text-[#B5532A]" />,
      description: "In an era of relentless digital notifications, pottery grounds us. The physical sensation of wet clay centering beneath your palms activates deep mental focus and calm.",
    },
    {
      title: "Ancient Craft, Modern Studio",
      icon: <Award className="w-6 h-6 text-[#B5532A]" />,
      description: "We honor the 5,000-year ceramic heritage of the Indus Valley while equipping our Clifton studio with modern variable-speed electric wheels and digital kilns.",
    },
    {
      title: "Zero Barrier to Entry",
      icon: <Smile className="w-6 h-6 text-[#B5532A]" />,
      description: "You do not need to be an artist. Our patient master potters guide you step-by-step through every pinch, pull, and trim with warmth and encouragement.",
    },
    {
      title: "Food-Safe & Durable Ceramics",
      icon: <Flame className="w-6 h-6 text-[#B5532A]" />,
      description: "We exclusively use lead-free, non-toxic glazes and fire to stoneware temperatures (1200°C), making all creations durable, waterproof, and everyday microwave-safe.",
    },
  ];

  const team = [
    {
      name: "Master Zeeshan Raza",
      role: "Founder & Lead Ceramic Artisan",
      experience: "14+ Years Studio & Wheel Craft",
      bio: "Trained under generational Indus ceramicists and formal fine arts academies, Zeeshan founded Clay Artist Pottery to bring the authentic joy of wheel throwing to Karachi families.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Samina Tariq",
      role: "Senior Studio Instructor & Glaze Specialist",
      experience: "8+ Years in Ceramic Chemistry",
      bio: "Samina specializes in custom terracotta slip formulation and decorative underglaze brushwork, leading beginner workshops with immense patience and joy.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Daniyal Farooqi",
      role: "Events & School Trip Coordinator",
      experience: "6+ Years in Youth Arts Education",
      bio: "Daniyal oversees our large corporate team sessions and school STEAM field trips, ensuring engaging schedules, safety, and seamless event execution.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-clay-grain">
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E8DACB] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow text="OUR ESSENCE &amp; PASSION" />
            <h1 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#3A2016] mt-2">
              Where Earthen Clay Becomes A Lifelong Memory
            </h1>
            <p className="text-base sm:text-lg text-[#443C37] mt-4 leading-relaxed">
              Located in the heart of Clifton Block 4, Karachi, <strong>Clay Artist Pottery</strong> was born out of a simple belief: everyone deserves a serene space to disconnect from the chaos and feel the magic of creating with their bare hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
                alt="Studio wheel throwing"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/post.jpg"
                alt="Handcrafted ceramics"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
                alt="Glazed pottery pieces"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Values */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="WHAT WE STAND FOR" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
              Our Studio Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl p-7 border border-[#E8DACB] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F9EDE6] flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6259] mt-3 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Artists */}
      <section className="py-20 bg-white border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionEyebrow text="ARTISAN MENTORS" />
            <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
              Meet Our Studio Mentors
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2">
              Passionate ceramists dedicated to making your studio visit joyful, educational, and inspiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#FAF3EA] rounded-3xl overflow-hidden border border-[#E8DACB] shadow-sm flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#B5532A]">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#3A2016]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#B5532A] uppercase tracking-wider mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#6E6259] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Location & Facility */}
      <section className="py-20 bg-[#FAF3EA] border-b border-[#E8DACB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionEyebrow text="VISIT OUR CLIFTON STUDIO" />
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#3A2016]">
                Designed For Comfort, Light &amp; Inspiration
              </h2>
              <p className="text-sm sm:text-base text-[#443C37] leading-relaxed">
                Located near Dolmen Mall in Clifton Block 4, our studio is fully air-conditioned, featuring floor-to-ceiling natural ambient lighting, high-torque Shimpo &amp; Brent electric pottery wheels, spacious hand-building slab tables, and dedicated cleanup sinks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#3A2016]">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  <span>Centrally located in Clifton Block 4 with secure parking</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#3A2016]">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  <span>Individual potter wheels for all participants</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#3A2016]">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  <span>High-temperature electric kiln firing onsite</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#B5532A] hover:bg-[#9A421D] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <span>Book Your Studio Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80"
                  alt="Clay Artist Pottery Studio interior in Clifton Karachi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
