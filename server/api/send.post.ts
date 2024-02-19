import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const { email_anggota, url, nama_provider, no_anggota } = await readBody(event) 

  try {
    const data = await resend.emails.send({
      from: 'HUMAS HPOI <humas@anggota.hpoi.org>',
      to: [`${email_anggota}`],
      subject: "Selamat bergabung di HPOI",
      html: `<div><strong>Selamat datang rekan kami ${nama_provider}</strong><br/><p>Anda telah terdaftar sebagai anggota AKTIF dari HPOI dengan nomor anggota ${no_anggota}. Silahkan unduh E-CARD Member anda pada link dibawah, atau melalui login di member area website HPOI.</p><a href='${url}'>Download E-CARD Member Disini</a><br/><br/><p>Best Regards,</p><strong>HUMAS HPOI</strong></div>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});