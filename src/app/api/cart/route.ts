import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle/db";
import { cartTable } from "@/lib/drizzle/schema";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const url = request.nextUrl
    const uid = url.searchParams.get('user_id')

    try {

        if (!uid || uid === 'undefined' || uid === 'null') {      
            return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
        }
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))
        console.log('Query Result:', res);

        return NextResponse.json({ res })

    } catch (error) {

        console.log(error)
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })

    }
}

export const POST = async (request: NextRequest) => {
    const req = await request.json()

    let user_id = cookies().get('user_id')?.value;

    if (!user_id) {
        user_id = randomUUID();
        cookies().set('user_id', user_id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // One week
            path: '/',
        });
    }

    try {

        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: req.quantity? Number(req.quantity): 1,
            user_id: user_id
        }).returning()

        return NextResponse.json({ res })

    } catch (error) {

        console.log(error)
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })

    }
}