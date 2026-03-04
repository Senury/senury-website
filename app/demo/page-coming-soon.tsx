"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  Check,
  Video,
  Building2,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Loader2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Generate available days for April 2026
function generateAprilDays() {
  const days = [];
  const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  const year = 2026;
  const month = 3; // April (0-indexed)

  // Start from April 1st
  for (let day = 1; day <= 30; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();

    // Only weekdays
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      days.push({
        date,
        dayName: dayNames[dayOfWeek],
        dayNum: day,
        month: "Apr",
      });
    }
  }
  return days;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
];

type DateTimeSelection = {
  date: Date | null;
  time: string | null;
};

export default function DemoComingSoon() {
  const [selections, setSelections] = useState<DateTimeSelection[]>([
    { date: null, time: null },
    { date: null, time: null },
    { date: null, time: null },
  ]);
  const [currentSelection, setCurrentSelection] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notaryName: "",
    position: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const days = generateAprilDays();

  const handleDateSelect = (date: Date) => {
    const newSelections = [...selections];
    newSelections[currentSelection] = { ...newSelections[currentSelection], date, time: null };
    setSelections(newSelections);
  };

  const handleTimeSelect = (time: string) => {
    const newSelections = [...selections];
    newSelections[currentSelection] = { ...newSelections[currentSelection], time };
    setSelections(newSelections);

    // Auto-advance to next appointment if not on the last one
    if (currentSelection < 2) {
      setTimeout(() => {
        setCurrentSelection(currentSelection + 1);
      }, 300);
    }
  };

  const removeSelection = (index: number) => {
    const newSelections = [...selections];
    newSelections[index] = { date: null, time: null };
    setSelections(newSelections);
    if (currentSelection === index) {
      setCurrentSelection(0);
    }
  };

  const formatSelectedDate = (date: Date | null) => {
    if (!date) return "";
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };
    return date.toLocaleDateString("de-DE", options);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/demo-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notaryName: formData.notaryName,
          position: formData.position,
          message: formData.message,
          preferences: selections.map((sel, idx) => ({
            priority: idx + 1,
            date: sel.date?.toISOString(),
            time: sel.time,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ein Fehler ist aufgetreten");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
      setIsLoading(false);
    }
  };

  const allSelectionsValid = selections.every((sel) => sel.date && sel.time);
  const formValid = formData.name && formData.email && formData.notaryName;
  const canSubmit = allSelectionsValid && formValid;

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
              Vielen Dank für Ihre Anfrage
            </h1>
            <p className="text-lg text-[#6b6b6b] mb-8 max-w-md mx-auto">
              Wir prüfen Ihre Terminvorschläge und melden uns innerhalb von 24 Stunden mit einer Bestätigung bei Ihnen.
            </p>
            <div className="bg-white border border-[#e8e8e8] rounded-xl p-6 mb-8 max-w-md mx-auto text-left">
              <h3 className="font-serif text-lg text-[#1a1a1a] mb-4">Ihre Terminvorschläge:</h3>
              {selections.map((sel, idx) => (
                <div key={idx} className="flex items-center gap-3 mb-3 pb-3 border-b border-[#e8e8e8] last:border-0 last:mb-0 last:pb-0">
                  <div className="w-6 h-6 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center text-xs font-medium">
                    {idx + 1}
                  </div>
                  <div className="flex-1 text-sm text-[#6b6b6b]">
                    {formatSelectedDate(sel.date)} • {sel.time} Uhr
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white h-12 px-8 rounded-full"
            >
              <a href="/">Zurück zur Startseite</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfb]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-white to-[#fdfcfb] overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1a1a1a" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
              Senury live erleben
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#6b6b6b] mb-4 max-w-2xl mx-auto leading-relaxed">
              Senury befindet sich in der finalen Entwicklungsphase. Sichern Sie sich jetzt einen der ersten Demo-Termine im April und erleben Sie live, wie Senury Ihren Notariatsalltag transformiert.
            </p>
            <p className="text-base text-[#9a9a9a] max-w-xl mx-auto">
              Nennen Sie uns drei Wunschtermine. Wir bestätigen Ihnen den passenden Termin innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Date Selection */}
            <div className="lg:col-span-8">
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden mb-6">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-medium text-[#1a1a1a]">
                      Ihre Terminvorschläge
                    </h2>
                    <div className="flex gap-2">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSelection(idx)}
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all",
                            currentSelection === idx
                              ? "bg-[#1a1a1a] text-white"
                              : selections[idx].date && selections[idx].time
                              ? "bg-[#c9a66b] text-white"
                              : "bg-[#f5f5f5] text-[#9a9a9a]"
                          )}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Preferences Summary */}
                  {selections.some((sel) => sel.date && sel.time) && (
                    <div className="mb-6 p-4 bg-[#faf8f7] border border-[#e8e8e8] rounded-lg">
                      <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Gewählte Termine:</h3>
                      {selections.map((sel, idx) => {
                        if (!sel.date || !sel.time) return null;
                        return (
                          <div
                            key={idx}
                            className={cn(
                              "flex items-center justify-between mb-2 last:mb-0 text-sm p-2 rounded transition-colors",
                              currentSelection === idx ? "bg-white border border-[#c9a66b]" : ""
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <span className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                                currentSelection === idx
                                  ? "bg-[#c9a66b] text-white"
                                  : "bg-[#1a1a1a] text-white"
                              )}>
                                {idx + 1}
                              </span>
                              <span className="text-[#6b6b6b]">
                                {formatSelectedDate(sel.date)} • {sel.time} Uhr
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setCurrentSelection(idx)}
                                className="text-[#c9a66b] hover:text-[#1a1a1a] transition-colors text-xs font-medium"
                              >
                                Bearbeiten
                              </button>
                              <button
                                onClick={() => removeSelection(idx)}
                                className="text-[#9a9a9a] hover:text-[#1a1a1a] transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="mb-6 p-3 bg-[#c9a66b] bg-opacity-5 border border-[#c9a66b] border-opacity-20 rounded-lg">
                    <p className="text-sm text-[#1a1a1a]">
                      {selections[currentSelection].date && selections[currentSelection].time ? (
                        <>
                          <strong>Termin {currentSelection + 1}</strong> ausgewählt. Sie können unten einen anderen Termin wählen oder zu einem anderen Termin wechseln.
                        </>
                      ) : (
                        <>
                          Wählen Sie für <strong>Termin {currentSelection + 1}</strong> ein Datum und eine Uhrzeit:
                        </>
                      )}
                    </p>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">
                      Datum wählen (April 2026)
                    </h3>
                    <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 max-h-[280px] overflow-y-auto p-1">
                      {days.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day.date)}
                          className={cn(
                            "flex flex-col items-center p-2 sm:p-3 rounded-lg border transition-all",
                            "hover:border-[#c9a66b] cursor-pointer",
                            selections[currentSelection].date?.toDateString() === day.date.toDateString()
                              ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                              : "border-[#e8e8e8] bg-white"
                          )}
                        >
                          <span
                            className={cn(
                              "text-xs mb-1",
                              selections[currentSelection].date?.toDateString() === day.date.toDateString()
                                ? "text-[#c9a66b]"
                                : "text-[#9a9a9a]"
                            )}
                          >
                            {day.dayName}
                          </span>
                          <span className="text-lg font-medium">{day.dayNum}</span>
                          <span
                            className={cn(
                              "text-[10px] mt-0.5",
                              selections[currentSelection].date?.toDateString() === day.date.toDateString()
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
                  {selections[currentSelection].date && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9a9a9a] mb-4">
                        Uhrzeit wählen
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={cn(
                              "py-3 rounded-lg border text-sm font-medium transition-all",
                              selections[currentSelection].time === time
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
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="bg-white border-[#e8e8e8] rounded-xl overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                  <h2 className="font-serif text-2xl font-medium text-[#1a1a1a] mb-6">
                    Ihre Kontaktdaten
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-[#1a1a1a]">
                        Ihr Name <span className="text-[#c9a66b]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                        <Input
                          id="name"
                          placeholder="Max Mustermann"
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
                        E-Mail <span className="text-[#c9a66b]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                        <Input
                          id="email"
                          type="text"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="m.mustermann@notariat.de"
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
                        Telefon (optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+49 123 456789"
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
                        Notariat <span className="text-[#c9a66b]">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                        <Input
                          id="notaryName"
                          placeholder="Notariat Mustermann"
                          value={formData.notaryName}
                          onChange={(e) =>
                            setFormData({ ...formData, notaryName: e.target.value })
                          }
                          className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium text-[#1a1a1a]">
                        Position (optional)
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9a9a9a]" />
                        <Input
                          id="position"
                          placeholder="z.B. Notar, Notarfachangestellte/r"
                          value={formData.position}
                          onChange={(e) =>
                            setFormData({ ...formData, position: e.target.value })
                          }
                          className="pl-10 h-12 border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mt-6">
                    <label htmlFor="message" className="text-sm font-medium text-[#1a1a1a]">
                      Nachricht (optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#9a9a9a]" />
                      <Textarea
                        id="message"
                        placeholder="Teilen Sie uns mit, worauf Sie bei der Demo besonders Wert legen..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="pl-10 min-h-[100px] border-[#e8e8e8] focus:border-[#c9a66b] focus:ring-[#c9a66b] resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit || isLoading}
                    className="w-full mt-6 bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white rounded-full h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Terminanfrage senden
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* What to expect */}
                <Card className="bg-white border-[#e8e8e8] rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-[#c9a66b]" />
                      <h3 className="font-serif text-lg text-[#1a1a1a]">
                        Was Sie erwartet
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#c9a66b] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6b6b6b]">30-minütige persönliche Produktvorführung per Videoanruf</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#c9a66b] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6b6b6b]">Live-Einblick in Urkunden, Recherche und Kontrolle</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#c9a66b] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6b6b6b]">Individuelle Anpassung an Ihre Anforderungen</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#c9a66b] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[#6b6b6b]">Zeit für Ihre Fragen und Anliegen</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Duration */}
                <Card className="bg-[#faf8f7] border-[#e8e8e8] rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-[#c9a66b]" />
                      <h3 className="font-medium text-[#1a1a1a]">Dauer & Format</h3>
                    </div>
                    <p className="text-sm text-[#6b6b6b]">
                      Ca. 30 Minuten per Videokonferenz. Den Zugangslink erhalten Sie mit der Terminbestätigung.
                    </p>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card className="bg-[#1a1a1a] border-0 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-lg text-white mb-4">
                      So geht es weiter
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#c9a66b] flex items-center justify-center text-xs font-medium text-white flex-shrink-0">
                          1
                        </div>
                        <p className="text-sm text-[#9a9a9a]">
                          Sie senden uns drei Terminvorschläge
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#c9a66b] flex items-center justify-center text-xs font-medium text-white flex-shrink-0">
                          2
                        </div>
                        <p className="text-sm text-[#9a9a9a]">
                          Wir bestätigen einen Termin innerhalb von 24 Stunden
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#c9a66b] flex items-center justify-center text-xs font-medium text-white flex-shrink-0">
                          3
                        </div>
                        <p className="text-sm text-[#9a9a9a]">
                          Sie erhalten den Videokonferenz-Link per E-Mail
                        </p>
                      </div>
                    </div>
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
