import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, pais } = await request.json()

    // Validar datos
    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      )
    }

    // Aquí iría la integración con tu servicio de email (SendGrid, Resend, etc.)
    // Por ahora, simulamos el envío exitoso
    
    console.log('📧 Enviando eBook a:', {
      nombre,
      email,
      telefono,
      pais,
      timestamp: new Date().toISOString()
    })

    // Simular envío de email
    // En producción, aquí usarías un servicio como:
    // - SendGrid
    // - Resend
    // - AWS SES
    // - Mailgun
    
    // Ejemplo con Resend (comentado):
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'Recetas del Mundo <noreply@recetasdelmundo.com>',
      to: email,
      subject: '🎉 ¡Tu eBook de 1000 Recetas del Mundo está listo!',
      html: `
        <h1>¡Hola ${nombre}!</h1>
        <p>Gracias por tu compra. Aquí está tu eBook:</p>
        <a href="URL_DEL_EBOOK">Descargar eBook (PDF)</a>
        <p>¡Disfruta cocinando!</p>
      `
    })
    */

    // Por ahora, retornamos éxito simulado
    return NextResponse.json({
      success: true,
      message: 'eBook enviado exitosamente',
      data: {
        nombre,
        email,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Error al enviar eBook:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
