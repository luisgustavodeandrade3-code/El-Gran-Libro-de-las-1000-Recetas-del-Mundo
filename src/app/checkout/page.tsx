'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, CreditCard, Lock, Mail, User, Phone, MapPin, ArrowLeft, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simular processamento de pagamento
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Enviar eBook por email
      const response = await fetch('/api/send-ebook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          pais: formData.pais
        }),
      })

      if (response.ok) {
        setSuccess(true)
        // Redirecionar após 3 segundos
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } else {
        alert('Hubo un error al procesar tu compra. Por favor, intenta nuevamente.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al procesar tu compra. Por favor, intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full border-2 border-green-500 shadow-2xl">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">¡Compra Exitosa! 🎉</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tu eBook ha sido enviado a <span className="font-bold text-green-600">{formData.email}</span>
            </p>
            <div className="bg-green-50 rounded-xl p-6 space-y-3">
              <p className="text-gray-700">
                📧 Revisa tu bandeja de entrada (y spam) en los próximos minutos
              </p>
              <p className="text-gray-700">
                📚 El eBook incluye 1000+ recetas listas para usar
              </p>
              <p className="text-gray-700">
                💝 ¡Gracias por tu compra y buen provecho!
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Serás redirigido a la página principal en unos segundos...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => router.push('/')}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Finalizar Compra</h1>
          <p className="text-gray-600">Completa tus datos para recibir el eBook instantáneamente</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-orange-500" />
                    <span>Información Personal</span>
                  </CardTitle>
                  <CardDescription>Necesitamos estos datos para enviarte el eBook</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Juan Pérez"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="telefono"
                          name="telefono"
                          placeholder="+1 234 567 890"
                          className="pl-10"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pais">País *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="pais"
                          name="pais"
                          placeholder="México"
                          className="pl-10"
                          value={formData.pais}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Información de Pago */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-orange-500" />
                    <span>Información de Pago</span>
                  </CardTitle>
                  <CardDescription>Pago seguro con encriptación SSL</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Nombre en la Tarjeta *</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      placeholder="JUAN PEREZ"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Fecha de Expiración *</Label>
                      <Input
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/AA"
                        maxLength={5}
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvv">CVV *</Label>
                      <Input
                        id="cardCvv"
                        name="cardCvv"
                        placeholder="123"
                        maxLength={4}
                        value={formData.cardCvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                    <Lock className="w-4 h-4 text-blue-500" />
                    <span>Tus datos están protegidos con encriptación SSL de 256 bits</span>
                  </div>
                </CardContent>
              </Card>

              {/* Botón de Compra */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 text-xl shadow-xl"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Procesando Pago...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Pagar $29.99 USD
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                Al completar la compra, aceptas nuestros términos y condiciones
              </p>
            </form>
          </div>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📚</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">1000 Recetas del Mundo</h3>
                      <p className="text-sm text-gray-600">eBook Digital Premium</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Precio Original</span>
                      <span className="line-through">$59.99</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>Descuento (50%)</span>
                      <span>-$30.00</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>$29.99</span>
                    </div>
                  </div>

                  <Badge className="w-full justify-center bg-green-500 text-white py-2">
                    ¡Ahorras $30.00 hoy!
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">Incluye:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>1000+ recetas detalladas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>50+ países representados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>500+ recetas fitness</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Imágenes HD premium</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Descarga inmediata</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Garantía 30 días</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-700 font-semibold">
                    <Mail className="w-4 h-4" />
                    <span>Entrega Instantánea</span>
                  </div>
                  <p className="text-sm text-blue-600">
                    Recibirás el eBook en tu email inmediatamente después del pago
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
