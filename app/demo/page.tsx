"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  ChevronLeft,
  Check,
  Video,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Shield,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Time slots available for booking
const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];

// Generate next 14 days for calendar
function generateDays() {
  const days = [];
  const today = new Date();
  const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

  for (let i = 0; i < 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date,
      dayName: dayNames[date.getDay()],
      dayNum: date.getDate(),
      month: monthNames[date.getMonth()],
      available: date.getDay() !== 0 && date.getDay() !== 6, // No weekends
    });
  }
  return days;
}

export default function DemoPage() {
  const t = useTranslations("demo");
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notaryName: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const days = generateDays();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && formData.name && formData.email) {
      setStep(3);
    } else if (step === 3) {
      setIsSubmitted(true);
    }
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    return selectedDate.toLocaleDateString("de-DE", options);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#fdfcfb]">
        <div className="pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-20 h-20 bg-[#c9a66b] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-14 h-14 bg-[#c9a66b] rounded-full flex items-center justify-center">
                <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#1a1a1a] mb-4">
              {t("success.title")}
            </h1>
            <p className="text-lg text-[#6b6b6b] mb-8 max-w-md mx-auto">
              {t("success.description")}
            </p>
            <div className="bg-white border border-[#e8e8e8] rounded-xl p-6 mb-8 max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#e8e8e8]">
                <Calendar className="w-5 h-5 text-[#c9a66b]" />
                <span className="text-[#1a1a1a] font-medium">{formatSelectedDate()}</span>
              </div>
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#e8e8e8]">
                <Clock className="w-5 h-5 text-[#c9a66b]" />
                <span className="text-[#1a1a1a] font-medium">{selectedTime} Uhr</span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-[#c9a66b]" />
                <span className="text-[#1a1a1a]">{t("booking.videoCall")}</span>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#c9a66b] hover:text-[#1a1a1a] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              {t("success.backHome")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-white to-[#fdfcfb] border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center rounded-xl">
                <Sparkles className="w-6 h-6 text-[#c9a66b]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9a9a]">
                {t("hero.badge")}
              </span>
            </div>
            <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-[#6b6b6b] max-w-2xl leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Steps */}
            <div className="lg:col-span-8">
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Progress Steps */}
                  <div className="flex items-center gap-4 mb-10">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center gap-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                            step >= s
                              ? "bg-[#1a1a1a] text-white"
                              : "bg-[#f5f5f5] text-[#9a9a9a]"
                          )}
                        >
                          {step > s ? <Check className="w-5 h-5" /> : s}
                        </div>
                        {s < 3 && (
                          <div
                            className={cn(
                              "w-12 sm:w-20 h-0.5 transition-colors",
                              step > s ? "bg-[#1a1a1a]" : "bg-[#e8e8e8]"
                            )}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Date & Time Selection */}
                  {step === 1 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-2">
                          {t("steps.date.title")}
                        </h2>
                        <p className="text-[#6b6b6b]">{t("steps.date.description")}</p>
                      </div>

                      {/* Date Selection */}
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">
                          {t("calendar.selectDate")}
                        </h3>
                        <div className="grid grid-cols-7 sm:grid-cols-7 gap-2">
                          {days.map((day, index) => (
                            <button
                              key={index}
                              onClick={() => day.available && handleDateSelect(day.date)}
                              disabled={!day.available}
                              className={cn(
                                "flex flex-col items-center p-2 sm:p-3 rounded-lg border transition-all",
                                !day.available && "opacity-40 cursor-not-allowed bg-[#f5f5f5]",
                                day.available && "hover:border-[#c9a66b] cursor-pointer",
                                selectedDate?.toDateString() === day.date.toDateString()
                                  ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                                  : "border-[#e8e8e8] bg-white"
                              )}
                            >
                              <span
                                className={cn(
                                  "text-[10px] sm:text-xs mb-1",
                                  selectedDate?.toDateString() === day.date.toDateString()
                                    ? "text-[#c9a66b]"
                                    : "text-[#9a9a9a]"
                                )}
                              >
                                {day.dayName}
                              </span>
                              <span className="text-base sm:text-lg font-medium">{day.dayNum}</span>
                              <span
                                className={cn(
                                  "text-[9px] sm:text-[10px] mt-0.5",
                                  selectedDate?.toDateString() === day.date.toDateString()
                                    ? "text-white/70"
                                    : "text-[#9a9a9a]"
                                )}
                              >
                                {day.month}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      {selectedDate && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">
                            {t("calendar.selectTime")}
                          </h3>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => handleTimeSelect(time)}
                                className={cn(
                                  "py-2.5 px-3 rounded-lg border text-sm font-medium transition-all",
                                  selectedTime === time
                                    ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                                    : "border-[#e8e8e8] bg-white hover:border-[#c9a66b] text-[#6b6b6b]"
                                )}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step 2: Personal Information */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-2">
                          {t("steps.info.title")}
                        </h2>
                        <p className="text-[#6b6b6b]">{t("steps.info.description")}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-[#1a1a1a]">
                            {t("form.name.label")}
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                            <Input
                              id="name"
                              placeholder={t("form.name.placeholder")}
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-[#1a1a1a]">
                            {t("form.email.label")}
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                            <Input
                              id="email"
                              type="email"
                              placeholder={t("form.email.placeholder")}
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-[#1a1a1a]">
                            {t("form.phone.label")}
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                            <Input
                              id="phone"
                              type="tel"
                              placeholder={t("form.phone.placeholder")}
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="notaryName" className="text-sm font-medium text-[#1a1a1a]">
                            {t("form.notary.label")}
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                            <Input
                              id="notaryName"
                              placeholder={t("form.notary.placeholder")}
                              value={formData.notaryName}
                              onChange={(e) =>
                                setFormData({ ...formData, notaryName: e.target.value })
                              }
                              className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[#1a1a1a]">
                          {t("form.message.label")}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#9a9a9a]" />
                          <Textarea
                            id="message"
                            placeholder={t("form.message.placeholder")}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({ ...formData, message: e.target.value })
                            }
                            className="pl-10 min-h-[120px] border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b] resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-2">
                          {t("steps.confirm.title")}
                        </h2>
                        <p className="text-[#6b6b6b]">{t("steps.confirm.description")}</p>
                      </div>

                      <div className="bg-[#faf8f7] border border-[#e8e8e8] rounded-xl p-6 space-y-4">
                        <div className="flex items-start gap-4 pb-4 border-b border-[#e8e8e8]">
                          <Calendar className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                          <div>
                            <p className="text-sm text-[#9a9a9a]">{t("summary.date")}</p>
                            <p className="text-[#1a1a1a] font-medium">{formatSelectedDate()}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pb-4 border-b border-[#e8e8e8]">
                          <Clock className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                          <div>
                            <p className="text-sm text-[#9a9a9a]">{t("summary.time")}</p>
                            <p className="text-[#1a1a1a] font-medium">{selectedTime} Uhr</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pb-4 border-b border-[#e8e8e8]">
                          <Video className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                          <div>
                            <p className="text-sm text-[#9a9a9a]">{t("summary.type")}</p>
                            <p className="text-[#1a1a1a] font-medium">{t("meetingType.video")}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pb-4 border-b border-[#e8e8e8]">
                          <User className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                          <div>
                            <p className="text-sm text-[#9a9a9a]">{t("summary.name")}</p>
                            <p className="text-[#1a1a1a] font-medium">{formData.name}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 pb-4 border-b border-[#e8e8e8]">
                          <Mail className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                          <div>
                            <p className="text-sm text-[#9a9a9a]">{t("summary.email")}</p>
                            <p className="text-[#1a1a1a] font-medium">{formData.email}</p>
                          </div>
                        </div>

                        {formData.notaryName && (
                          <div className="flex items-start gap-4">
                            <Building2 className="w-5 h-5 text-[#c9a66b] mt-0.5" />
                            <div>
                              <p className="text-sm text-[#9a9a9a]">{t("summary.notary")}</p>
                              <p className="text-[#1a1a1a] font-medium">{formData.notaryName}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-[#c9a66b] bg-opacity-5 border border-[#c9a66b] border-opacity-20 rounded-lg">
                        <Shield className="w-5 h-5 text-[#c9a66b] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#6b6b6b]">{t("privacyNotice")}</p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 mt-8 border-t border-[#e8e8e8]">
                    {step > 1 ? (
                      <button
                        onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3)}
                        className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t("buttons.back")}
                      </button>
                    ) : (
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t("buttons.cancel")}
                      </Link>
                    )}

                    <Button
                      onClick={handleContinue}
                      disabled={
                        (step === 1 && (!selectedDate || !selectedTime)) ||
                        (step === 2 && (!formData.name || !formData.email))
                      }
                      className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-full h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {step === 3 ? t("buttons.confirm") : t("buttons.continue")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* What to expect */}
                <Card className="bg-white border-[#e8e8e8] rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">
                      {t("sidebar.expect.title")}
                    </h3>
                    <ul className="space-y-3">
                      {t.raw("sidebar.expect.items").map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#c9a66b] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#6b6b6b]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Duration */}
                <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-[#c9a66b]" />
                      <h3 className="font-medium text-[#1a1a1a]">{t("sidebar.duration.title")}</h3>
                    </div>
                    <p className="text-sm text-[#6b6b6b]">{t("sidebar.duration.text")}</p>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="bg-[#1a1a1a] border-0 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg text-white mb-2">
                      {t("sidebar.contact.title")}
                    </h3>
                    <p className="text-sm text-[#9a9a9a] mb-4">{t("sidebar.contact.text")}</p>
                    <a
                      href="mailto:demo@senury.com"
                      className="inline-flex items-center gap-2 text-sm text-[#c9a66b] hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      demo@senury.com
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
