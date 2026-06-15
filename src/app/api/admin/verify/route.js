import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { adminId, password } = body;

    const ADMIN_ID = process.env.ADMIN_ID;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_ID || !ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Admin credentials not configured' },
        { status: 500 }
      );
    }

    // Verify credentials
    if (adminId === ADMIN_ID && password === ADMIN_PASSWORD) {
      // Generate a simple token (in production, use JWT)
      const token = Buffer.from(`${adminId}:${Date.now()}`).toString('base64');
      
      return NextResponse.json(
        {
          success: true,
          token,
          message: 'Login successful'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid admin ID or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Admin verification error:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred during verification' },
      { status: 500 }
    );
  }
}
