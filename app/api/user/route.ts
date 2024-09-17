import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Fungsi untuk menangani GET request
export async function GET(req: NextRequest) {
  try {
    // Query untuk mendapatkan semua user dari database
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        nama: true,
        nik: true,
        phone: true,
        role: true,
      },
    });

    // Kembalikan response JSON dengan data user
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
