import { resend, Resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { url } from "inspector";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'dsp70458@gmail.com',
            to: email,
            subject: 'my next website | verification code',
            react: VerificationEmail({username, otp: verifyCode}),
        })
        return {success: true, message: 'failed to send verification email successfully'}

    } catch (emailError) {
        console.error("error sending verification email",
            emailError
        )
        return {success: false, message: 'falied to send verification email'}
    }
}