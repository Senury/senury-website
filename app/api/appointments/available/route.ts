import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get("month"); // e.g., "2026-04"

  if (!month || !/^\d{4}-\d{2}$/.test(month)) {
    return NextResponse.json(
      { error: "Monat im Format YYYY-MM erforderlich" },
      { status: 400 }
    );
  }

  try {
    const sql = getDb();

    const rows = await sql`
      SELECT to_char(date, 'YYYY-MM-DD') as date, time
      FROM appointments
      WHERE date >= ${month + "-01"}::date
        AND date < (${month + "-01"}::date + INTERVAL '1 month')
        AND status != 'cancelled'
    `;

    return NextResponse.json({
      bookedSlots: rows.map((row) => ({
        date: row.date,
        time: row.time,
      })),
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Verfügbarkeit konnte nicht abgerufen werden" },
      { status: 500 }
    );
  }
}
