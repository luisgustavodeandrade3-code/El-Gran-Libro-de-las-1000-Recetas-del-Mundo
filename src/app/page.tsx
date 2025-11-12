'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Star, Users, Globe, Heart, Zap, Shield, Download, CreditCard, Play, Clock, ChefHat, Award, BookOpen, Utensils, X } from 'lucide-react'

export default function EBookLandingPage() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [showSampleRecipes, setShowSampleRecipes] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    pais: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePurchase = () => {
    setShowCheckout(true)
  }

  const handleShowSamples = () => {
    setShowSampleRecipes(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración con el sistema de pagamento
    alert('¡Gracias por tu compra! Recibirás el eBook en tu email en los próximos minutos.')
  }

  // Recetas de muestra detalladas y completas
  const sampleRecipes = [
    {
      id: 1,
      title: "Paella Valenciana Auténtica",
      country: "🇪🇸 España",
      time: "45 min",
      difficulty: "Media",
      servings: "6 personas",
      category: "Plato Principal",
      calories: "420 kcal por porción",
      image: "🥘",
      ingredients: [
        "400g de arroz bomba (o arroz de grano corto)",
        "1 pollo de 1.5kg cortado en 8 trozos",
        "200g de judías verdes frescas",
        "200g de garrofón (judías lima grandes)",
        "2 tomates maduros rallados",
        "1 pimiento rojo cortado en tiras",
        "6 hebras de azafrán auténtico",
        "100ml de aceite de oliva virgen extra",
        "1.2 litros de caldo de pollo casero",
        "4 dientes de ajo picados finamente",
        "1 rama de romero fresco",
        "Sal marina y pimienta negra al gusto",
        "1 limón cortado en gajos (para servir)"
      ],
      instructions: [
        "Calentar la paellera a fuego medio-alto y añadir el aceite de oliva. Sazonar los trozos de pollo con sal y pimienta.",
        "Dorar el pollo por todos los lados hasta que esté bien sellado y dorado (8-10 minutos). Reservar en un plato.",
        "En el mismo aceite, sofreír las judías verdes y el garrofón durante 5 minutos hasta que estén tiernos.",
        "Añadir el ajo picado y sofreír 1 minuto sin que se queme. Incorporar el pimiento rojo y cocinar 3 minutos más.",
        "Agregar el tomate rallado y cocinar hasta que se evapore el líquido (3-4 minutos). La mezcla debe estar espesa.",
        "Devolver el pollo a la paellera y mezclar con las verduras. Añadir el romero.",
        "Incorporar el arroz distribuyéndolo uniformemente por toda la paellera. NO remover desde este punto.",
        "Calentar el caldo y disolver el azafrán en él. Verter el caldo caliente sobre el arroz de manera uniforme.",
        "Cocinar a fuego fuerte durante 10 minutos, luego reducir a fuego medio y cocinar 15 minutos más.",
        "En los últimos 5 minutos, subir el fuego para conseguir el 'socarrat' (fondo tostado).",
        "Retirar del fuego y cubrir con un paño limpio. Dejar reposar 5 minutos antes de servir.",
        "Decorar con gajos de limón y servir directamente de la paellera."
      ],
      tips: "El secreto de una buena paella está en no remover el arroz una vez añadido el caldo y conseguir el socarrat (fondo ligeramente tostado). El azafrán debe ser auténtico, no colorante. Si no tienes paellera, usa una sartén grande y ancha.",
      nutrition: "Rica en proteínas, carbohidratos complejos y vitaminas. El azafrán aporta antioxidantes naturales.",
      variations: "Puedes añadir caracoles, alcachofas o judías blancas según la tradición de tu región."
    },
    {
      id: 2,
      title: "Bowl Buddha Proteico Fitness",
      country: "💪 Fitness Internacional",
      time: "20 min",
      difficulty: "Fácil",
      servings: "2 personas",
      category: "Saludable",
      calories: "485 kcal por porción",
      image: "🥗",
      ingredients: [
        "200g de quinoa tricolor cocida",
        "150g de salmón fresco sin piel",
        "1 aguacate maduro grande",
        "100g de edamame cocido y pelado",
        "1 zanahoria grande en juliana fina",
        "80g de espinacas baby frescas",
        "2 cucharadas de tahini (pasta de sésamo)",
        "1 cucharada de salsa de soja baja en sodio",
        "1 cucharadita de aceite de sésamo",
        "1 cucharadita de miel pura",
        "1 cucharadita de jengibre fresco rallado",
        "2 cucharadas de semillas de sésamo tostadas",
        "1 cucharada de semillas de chía",
        "Sal marina y pimienta al gusto",
        "1 lima (jugo y ralladura)"
      ],
      instructions: [
        "Cocinar la quinoa según las instrucciones del paquete. Dejar enfriar completamente y reservar.",
        "Sazonar el salmón con sal, pimienta y un poco de aceite. Cocinar a la plancha 3-4 minutos por lado hasta que esté dorado pero jugoso por dentro.",
        "Preparar la salsa tahini mezclando tahini, salsa de soja, aceite de sésamo, miel, jengibre rallado y jugo de lima hasta obtener una consistencia cremosa.",
        "Lavar y secar las espinacas. Cortar el aguacate en láminas finas y rociar con jugo de lima para evitar oxidación.",
        "En dos bowls grandes, colocar la quinoa como base ocupando un tercio del bowl.",
        "Distribuir las espinacas frescas en otro tercio del bowl.",
        "Colocar el salmón cortado en trozos grandes sobre las espinacas.",
        "Añadir el aguacate en láminas, el edamame y la zanahoria en juliana en secciones separadas.",
        "Rociar generosamente con la salsa tahini por todo el bowl.",
        "Espolvorear las semillas de sésamo y chía por encima.",
        "Decorar con ralladura de lima y servir inmediatamente."
      ],
      tips: "Este bowl es perfecto para post-entreno ya que combina proteínas completas, grasas saludables y carbohidratos complejos. Puedes preparar los ingredientes con anticipación y ensamblar al momento de comer. La quinoa se puede sustituir por arroz integral o bulgur.",
      nutrition: "Alto en proteínas (28g), omega-3, fibra y antioxidantes. Perfecto para recuperación muscular y saciedad prolongada.",
      variations: "Sustituye el salmón por tofu marinado, pollo a la plancha o tempeh. Añade pepino, rábanos o brotes para más textura."
    },
    {
      id: 3,
      title: "Ramen Tonkotsu Casero Auténtico",
      country: "🇯🇵 Japón",
      time: "8 horas (3h activas)",
      difficulty: "Alta",
      servings: "4 personas",
      category: "Sopa Tradicional",
      calories: "650 kcal por porción",
      image: "🍜",
      ingredients: [
        "2kg de huesos de cerdo (fémur y costillas)",
        "500g de huesos de pollo",
        "400g de fideos ramen frescos (o secos)",
        "4 huevos grandes",
        "300g de panceta de cerdo (chashu)",
        "2 cebolletas (parte verde y blanca)",
        "150g de brotes de bambú en conserva",
        "4 hojas de alga nori",
        "3 cucharadas de pasta de miso blanco",
        "2 cucharadas de salsa de soja",
        "1 cucharada de aceite de sésamo",
        "2 dientes de ajo picados",
        "1 trozo de jengibre de 3cm",
        "2 cucharadas de sake",
        "1 cucharada de mirin",
        "Sal al gusto"
      ],
      instructions: [
        "CALDO (8 horas antes): Blanquear los huesos en agua hirviendo 10 minutos. Escurrir y lavar bajo agua fría.",
        "Colocar los huesos limpios en una olla grande con 4 litros de agua fría. Llevar a ebullición fuerte.",
        "Mantener ebullición vigorosa durante 2 horas, luego reducir a fuego medio-alto y cocinar 6 horas más, añadiendo agua caliente según sea necesario.",
        "El caldo debe quedar cremoso y blanquecino. Colar y reservar caliente.",
        "HUEVOS MARINADOS (4 horas antes): Hervir los huevos exactamente 6 minutos. Enfriar en agua helada.",
        "Pelar cuidadosamente y marinar en una mezcla de salsa de soja, mirin y sake durante 4 horas.",
        "CHASHU (2 horas antes): Enrollar la panceta y atar con hilo. Dorar en una sartén por todos los lados.",
        "Cocinar en caldo con salsa de soja, sake, mirin y azúcar durante 1.5 horas hasta que esté tierno.",
        "MONTAJE: Cocinar los fideos según instrucciones del paquete. Escurrir bien.",
        "En cada bowl, colocar 1 cucharada de miso y un poco de caldo caliente. Mezclar hasta disolver.",
        "Añadir los fideos calientes y cubrir con el caldo cremoso.",
        "Decorar con chashu en láminas, medio huevo marinado, cebolletas, brotes de bambú y nori.",
        "Servir inmediatamente con aceite de sésamo al lado."
      ],
      tips: "La paciencia es clave para un buen tonkotsu. El caldo debe hervir vigorosamente para emulsionar las grasas y conseguir la textura cremosa característica. Puedes hacer el caldo con días de anticipación y congelarlo. Los huevos deben tener la yema ligeramente líquida.",
      nutrition: "Rico en colágeno, proteínas y minerales. El caldo largo extrae nutrientes profundos de los huesos.",
      variations: "Puedes hacer versión de pollo (paitan) o añadir maíz, algas wakame o pasta de ajo negro para diferentes sabores."
    },
    {
      id: 4,
      title: "Ceviche Peruano Clásico",
      country: "🇵🇪 Perú",
      time: "25 min",
      difficulty: "Fácil",
      servings: "4 personas",
      category: "Entrada Marina",
      calories: "180 kcal por porción",
      image: "🐟",
      ingredients: [
        "600g de pescado blanco súper fresco (lenguado, corvina o mero)",
        "10-12 limones peruanos (o 8 limones comunes)",
        "1 cebolla morada mediana",
        "2-3 ajíes limo (o jalapeños sin semillas)",
        "1 manojo de cilantro fresco",
        "1 camote amarillo grande",
        "1 choclo (maíz) desgranado cocido",
        "1 trozo de jengibre de 2cm",
        "Sal marina gruesa al gusto",
        "Pimienta negra recién molida",
        "1 hoja de lechuga (para servir)",
        "Cancha serrana (maíz tostado) opcional"
      ],
      instructions: [
        "PREPARACIÓN DEL PESCADO: Verificar que el pescado esté súper fresco (ojos brillantes, carne firme). Limpiar y cortar en cubos de 2cm exactos.",
        "Colocar el pescado en un bowl de vidrio o cerámica (nunca metal). Sazonar generosamente con sal marina y mezclar suavemente.",
        "PREPARACIÓN DE VEGETALES: Cortar la cebolla morada en juliana muy fina (casi transparente). Remojar en agua helada 10 minutos para quitar el picor.",
        "Picar finamente los ajíes limo (ajustar cantidad según tolerancia al picante).",
        "Picar el cilantro finamente, incluyendo tallos tiernos.",
        "Rallar finamente el jengibre fresco.",
        "LECHE DE TIGRE: Exprimir los limones y colar el jugo para eliminar pulpa y semillas.",
        "Mezclar el jugo de limón con una pizca de sal, pimienta y el jengibre rallado.",
        "MARINADO: Verter la 'leche de tigre' sobre el pescado. El pescado debe quedar completamente cubierto.",
        "Dejar marinar exactamente 5-8 minutos hasta que el pescado cambie de transparente a blanco opaco.",
        "Escurrir la cebolla y añadir al ceviche junto con el ají y cilantro.",
        "ACOMPAÑAMIENTOS: Cocinar el camote al vapor hasta que esté tierno. Hervir el choclo hasta que esté suave.",
        "PRESENTACIÓN: Servir inmediatamente en platos fríos, acompañado de camote en rodajas y choclo.",
        "Decorar con hojas de lechuga y cancha serrana si se desea."
      ],
      tips: "El pescado DEBE ser súper fresco, comprado el mismo día. El punto exacto del marinado es cuando el pescado cambia de color pero mantiene textura firme. No marinar más de 10 minutos o el pescado se 'cocinará' demasiado. La 'leche de tigre' sobrante es un afrodisíaco natural muy apreciado.",
      nutrition: "Excelente fuente de proteínas magras, vitamina C y minerales. Bajo en calorías y grasas.",
      variations: "Ceviche mixto (con mariscos), ceviche de pulpo, o versión nikkei con leche de coco y ají amarillo."
    },
    {
      id: 5,
      title: "Curry Verde Tailandés Auténtico",
      country: "🇹🇭 Tailandia",
      time: "45 min",
      difficulty: "Media",
      servings: "4 personas",
      category: "Plato Principal Picante",
      calories: "380 kcal por porción",
      image: "🍛",
      ingredients: [
        "600g de pollo (muslo sin hueso) en tiras",
        "400ml de leche de coco espesa",
        "200ml de leche de coco ligera",
        "3-4 cucharadas de pasta de curry verde tailandés",
        "2 berenjenas tailandesas (o 1 berenjena común)",
        "150g de brotes de bambú en conserva",
        "20 hojas de albahaca tailandesa fresca",
        "2 hojas de lima kaffir (o ralladura de lima)",
        "2-3 chiles rojos frescos",
        "2 cucharadas de salsa de pescado",
        "1 cucharada de azúcar de palma (o azúcar moreno)",
        "1 cucharada de aceite de coco",
        "2 dientes de ajo picados",
        "1 trozo de galanga de 2cm (o jengibre)",
        "Arroz jazmín para acompañar"
      ],
      instructions: [
        "PREPARACIÓN: Cortar las berenjenas en cuartos y remojar en agua salada para evitar amargor.",
        "Cortar el pollo en tiras medianas y sazonar ligeramente con sal.",
        "Separar la parte espesa de la leche de coco (la crema que flota arriba).",
        "CURRY BASE: Calentar el wok o sartén grande a fuego medio-alto. Añadir 3 cucharadas de la crema espesa de coco.",
        "Freír la pasta de curry verde en la crema durante 2-3 minutos hasta que sea muy fragante y el aceite se separe.",
        "Añadir el pollo y cocinar 5-6 minutos hasta que esté sellado y ligeramente dorado.",
        "CONSTRUCCIÓN DEL CURRY: Verter el resto de leche de coco espesa y mezclar bien.",
        "Añadir la salsa de pescado y azúcar de palma. Mezclar hasta disolver completamente.",
        "Incorporar las berenjenas escurridas y los brotes de bambú.",
        "Cocinar a fuego medio durante 15-20 minutos hasta que las berenjenas estén tiernas.",
        "Añadir la leche de coco ligera si el curry está muy espeso.",
        "TOQUE FINAL: Incorporar las hojas de lima kaffir rotas (no cortadas) y los chiles enteros.",
        "Cocinar 2 minutos más y retirar del fuego.",
        "Añadir las hojas de albahaca tailandesa al final y mezclar suavemente.",
        "SERVICIO: Servir inmediatamente sobre arroz jazmín caliente.",
        "Decorar con hojas de albahaca extra y chiles en rodajas."
      ],
      tips: "La pasta de curry verde casera es ideal, pero una buena marca comercial funciona bien. La clave está en freír la pasta en la crema de coco hasta que sea muy fragante. Ajusta el picante según tu tolerancia. La albahaca tailandesa tiene un sabor único, pero puedes usar albahaca común si no la encuentras.",
      nutrition: "Rico en proteínas, grasas saludables del coco y antioxidantes de las especias. Moderadamente calórico por la leche de coco.",
      variations: "Curry verde con pescado, camarones, tofu o verduras mixtas. Puedes añadir calabaza, judías verdes o pimientos."
    },
    {
      id: 6,
      title: "Tiramisu Italiano Tradicional",
      country: "🇮🇹 Italia",
      time: "30 min + 4h refrigeración",
      difficulty: "Media",
      servings: "8 personas",
      category: "Postre Clásico",
      calories: "420 kcal por porción",
      image: "🍰",
      ingredients: [
        "500g de mascarpone a temperatura ambiente",
        "6 huevos grandes (yemas y claras separadas)",
        "150g de azúcar refinada",
        "300ml de café espresso fuerte (frío)",
        "3 cucharadas de licor de café (Kahlúa o Marsala)",
        "2 paquetes de galletas savoiardi (ladyfingers)",
        "Cacao en polvo sin azúcar para espolvorear",
        "Chocolate negro 70% para rallar (opcional)",
        "1 pizca de sal",
        "2 cucharadas de azúcar glas"
      ],
      instructions: [
        "PREPARACIÓN BASE: Separar las yemas de las claras de huevo en bowls diferentes. Asegurarse que no quede nada de yema en las claras.",
        "CREMA DE MASCARPONE: Batir las yemas con 100g de azúcar hasta que estén pálidas y cremosas (5-6 minutos).",
        "Añadir el mascarpone a temperatura ambiente y batir hasta obtener una mezcla lisa y homogénea.",
        "MERENGUE: En un bowl limpio y seco, batir las claras con una pizca de sal hasta formar picos suaves.",
        "Añadir gradualmente los 50g de azúcar restante y batir hasta formar picos firmes y brillantes.",
        "COMBINACIÓN: Incorporar 1/3 del merengue a la crema de mascarpone con movimientos envolventes suaves.",
        "Añadir el resto del merengue en dos tandas, mezclando con cuidado para no perder volumen.",
        "CAFÉ: Mezclar el café espresso frío con el licor de café en un plato hondo.",
        "MONTAJE: En una fuente rectangular de vidrio (20x30cm), hacer la primera capa:",
        "Sumergir rápidamente cada savoiardi en el café (2 segundos por lado) y colocar en la fuente formando una capa uniforme.",
        "Extender la mitad de la crema de mascarpone sobre las galletas con una espátula.",
        "Repetir con otra capa de savoiardi empapados y el resto de la crema.",
        "Alisar la superficie y cubrir con film transparente.",
        "REFRIGERACIÓN: Refrigerar mínimo 4 horas, idealmente toda la noche.",
        "PRESENTACIÓN: Antes de servir, espolvorear generosamente con cacao en polvo usando un colador fino.",
        "Opcional: rallar chocolate negro por encima para decorar.",
        "Cortar en porciones cuadradas y servir frío."
      ],
      tips: "El mascarpone debe estar a temperatura ambiente para evitar grumos. No empapar demasiado las galletas o se desharán. El tiramisu mejora con el tiempo, así que es perfecto para preparar el día anterior. Usa café espresso real para el mejor sabor. Las claras deben estar completamente libres de grasa para montar correctamente.",
      nutrition: "Rico en proteínas, calcio y energía. Postre indulgente perfecto para ocasiones especiales.",
      variations: "Tiramisu de frutas (fresas, frambuesas), versión sin alcohol, o tiramisu de chocolate blanco."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Recetas del Mundo</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500 text-white animate-pulse">¡Solo Hoy!</Badge>
              <Button 
                onClick={handlePurchase}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Comprar Ahora
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Modal de Recetas de Muestra */}
      {showSampleRecipes && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">🍽️ Recetas Completas de Muestra</h2>
                  <p className="text-orange-100 text-lg">6 recetas detalladas de nuestras 1000+ incluidas en el eBook</p>
                </div>
                <Button
                  onClick={() => setShowSampleRecipes(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-2"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
            
            <div className="p-8 space-y-12">
              {sampleRecipes.map((recipe) => (
                <Card key={recipe.id} className="border-2 border-orange-100 shadow-xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 p-8">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-6xl">{recipe.image}</div>
                        <div>
                          <CardTitle className="text-3xl text-gray-900 mb-2">{recipe.title}</CardTitle>
                          <div className="flex items-center space-x-4 flex-wrap gap-2">
                            <Badge className="bg-orange-500 text-white text-lg px-4 py-2">{recipe.country}</Badge>
                            <Badge variant="outline" className="text-lg px-4 py-2">{recipe.category}</Badge>
                            <Badge className="bg-green-500 text-white text-lg px-4 py-2">{recipe.calories}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-lg text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5" />
                          <span className="font-semibold">{recipe.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5" />
                          <span className="font-semibold">{recipe.servings}</span>
                        </div>
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          Dificultad: {recipe.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Ingredientes */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                          <ChefHat className="w-6 h-6 mr-3 text-orange-500" />
                          Ingredientes ({recipe.servings})
                        </h4>
                        <ul className="space-y-3">
                          {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-lg leading-relaxed">{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Instrucciones */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                          <BookOpen className="w-6 h-6 mr-3 text-orange-500" />
                          Preparación Paso a Paso
                        </h4>
                        <ol className="space-y-4">
                          {recipe.instructions.map((step, index) => (
                            <li key={index} className="flex space-x-4">
                              <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                {index + 1}
                              </span>
                              <span className="text-gray-700 text-lg leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    
                    {/* Tips del Chef */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-500">
                      <h5 className="font-bold text-orange-800 mb-3 flex items-center text-xl">
                        <Award className="w-5 h-5 mr-2" />
                        Consejos del Chef
                      </h5>
                      <p className="text-orange-700 text-lg leading-relaxed">{recipe.tips}</p>
                    </div>

                    {/* Información Nutricional */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500">
                        <h5 className="font-bold text-green-800 mb-2 flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          Información Nutricional
                        </h5>
                        <p className="text-green-700">{recipe.nutrition}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                        <h5 className="font-bold text-purple-800 mb-2 flex items-center">
                          <Globe className="w-4 h-4 mr-2" />
                          Variaciones
                        </h5>
                        <p className="text-purple-700">{recipe.variations}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Call to Action Mejorado */}
              <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
                <h3 className="text-4xl font-bold mb-6">¡Estas 6 recetas son solo el comienzo!</h3>
                <p className="text-2xl mb-8 text-orange-100 leading-relaxed">
                  Cada receta en el eBook completo tiene este nivel de detalle profesional.<br/>
                  <span className="font-bold">1000+ recetas</span> con instrucciones paso a paso, tips de chef y variaciones.
                </p>
                <div className="grid md:grid-cols-4 gap-6 mb-8 text-lg">
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div>Recetas Detalladas</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div>Países Diferentes</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div>Recetas Fitness</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-2">HD</div>
                    <div>Imágenes Premium</div>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    setShowSampleRecipes(false)
                    handlePurchase()
                  }}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
                >
                  🔥 Obtener el eBook Completo - $29.99
                </Button>
                <p className="mt-4 text-orange-200 text-lg">
                  ⚡ Descarga inmediata • 💰 Garantía 30 días • 🔒 Pago seguro
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Mejorado */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 text-lg font-semibold animate-bounce">
                    🔥 ¡Oferta Especial - 50% OFF!
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(2,847 reseñas)</span>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  El Gran Libro de las{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    1000 Recetas
                  </span>{' '}
                  del Mundo
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                  🌍 Sabores, Salud y Diversidad Culinaria. Más de 1000 recetas internacionales, 
                  fitness y saludables de todas las culturas del mundo en un solo eBook profesional.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-orange-600">1000+</div>
                  <div className="text-sm text-gray-600">Recetas</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-red-600">50+</div>
                  <div className="text-sm text-gray-600">Países</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Fitness</div>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">HD</div>
                  <div className="text-sm text-gray-600">Imágenes</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  onClick={handlePurchase}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
                >
                  🚀 Descargar Ahora - $29.99
                </Button>
                <Button 
                  onClick={handleShowSamples}
                  variant="outline" 
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-12 py-6 text-xl font-semibold"
                >
                  📖 Ver Recetas Completas Gratis
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="w-5 h-5 text-blue-500" />
                  <span>Descarga inmediata</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span>Calidad premium</span>
                </div>
              </div>
            </div>

            {/* Capa del eBook Mejorada */}
            <div className="relative flex justify-center">
              <div className="relative group">
                {/* Sombra y efectos */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                
                {/* Libro principal */}
                <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-3xl p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group-hover:scale-105">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="text-center space-y-6">
                      {/* Ícono principal */}
                      <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <ChefHat className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Título del libro */}
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          1000 RECETAS
                        </h3>
                        <p className="text-xl font-semibold text-gray-800">DEL MUNDO</p>
                        <p className="text-gray-600">Edición Premium Digital</p>
                      </div>
                      
                      {/* Características */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-orange-500" />
                          <span>600+ páginas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-blue-500" />
                          <span>50 países</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-green-500" />
                          <span>Recetas fitness</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span>HD Quality</span>
                        </div>
                      </div>
                      
                      {/* Badge de bestseller */}
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 font-bold">
                        🏆 #1 BESTSELLER
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Elementos flotantes */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-xl">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios en Video - MODIFICADA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              🎥 Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-300">
              Testimonios reales de personas que transformaron su cocina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Testimonio 1 - Laura Martínez (Nutricionista) */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 relative overflow-hidden">
                  {/* Video profesional simulado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Overlay profesional */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Información del video */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">L</span>
                        </div>
                        <div className="text-white text-sm">
                          <p className="font-semibold">Laura Martínez</p>
                          <p className="text-xs opacity-80">Nutricionista</p>
                        </div>
                      </div>
                      <Badge className="bg-red-500 text-white text-xs">▶ LIVE</Badge>
                    </div>
                  </div>
                  
                  {/* Duración del video */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded">2:34</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 text-white">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  "Perdí 12kg en 3 meses siguiendo las recetas fitness del eBook. La variedad es increíble y cada plato está lleno de sabor. Mis pacientes también están encantados con los resultados."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    📍 Ciudad de México, México
                  </div>
                  <Badge variant="outline" className="text-xs border-pink-400 text-pink-400">
                    Verificado ✓
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonio 2 - Roberto Silva (Chef Ejecutivo) */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 relative overflow-hidden">
                  {/* Video profesional simulado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Overlay profesional */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Información del video */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">R</span>
                        </div>
                        <div className="text-white text-sm">
                          <p className="font-semibold">Roberto Silva</p>
                          <p className="text-xs opacity-80">Chef Ejecutivo</p>
                        </div>
                      </div>
                      <Badge className="bg-red-500 text-white text-xs">▶ LIVE</Badge>
                    </div>
                  </div>
                  
                  {/* Duración del video */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded">3:12</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 text-white">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  "Mi restaurante ahora sirve platos auténticos de 15 países diferentes. Las recetas son precisas, las técnicas están bien explicadas y mis clientes no paran de felicitarme."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    📍 São Paulo, Brasil
                  </div>
                  <Badge variant="outline" className="text-xs border-blue-400 text-blue-400">
                    Verificado ✓
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Video Testimonio 3 - Carmen López (Madre de Familia) */}
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 relative overflow-hidden">
                  {/* Video profesional simulado */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Overlay profesional */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Información del video */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">C</span>
                        </div>
                        <div className="text-white text-sm">
                          <p className="font-semibold">Carmen López</p>
                          <p className="text-xs opacity-80">Madre de Familia</p>
                        </div>
                      </div>
                      <Badge className="bg-red-500 text-white text-xs">▶ LIVE</Badge>
                    </div>
                  </div>
                  
                  {/* Duración del video */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/60 text-white text-xs px-2 py-1 rounded">2:48</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 text-white">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  "Mis hijos ahora comen verduras gracias a las recetas creativas y divertidas. Toda la familia está feliz y hemos descubierto sabores de todo el mundo desde nuestra cocina."
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    📍 Madrid, España
                  </div>
                  <Badge variant="outline" className="text-xs border-orange-400 text-orange-400">
                    Verificado ✓
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas de videos */}
          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-yellow-400">2.8M+</div>
                <div className="text-sm text-gray-300">Visualizaciones</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-sm text-gray-300">Likes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-blue-400">15K+</div>
                <div className="text-sm text-gray-300">Comentarios</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview de Recetas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              🍽️ Muestra de Nuestras Recetas
            </h2>
            <p className="text-xl text-gray-600">
              Descubre algunos de los platos más populares incluidos en el eBook
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Receta 1 - Paella Valenciana */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🥘</div>
                    <p className="font-semibold text-xl">Paella Valenciana</p>
                    <p className="text-sm opacity-90">Auténtica receta española</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">🇪🇸 España</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">45 min</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Paella Valenciana Auténtica</h3>
                <p className="text-gray-600 mb-4">
                  La receta tradicional española con arroz bomba, azafrán, pollo y verduras frescas. Incluye técnica del socarrat.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline">Dificultad: Media</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Receta 2 - Bowl Buddha */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🥗</div>
                    <p className="font-semibold text-xl">Bowl Buddha Fitness</p>
                    <p className="text-sm opacity-90">Alto en proteínas</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">💪 Fitness</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">20 min</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Bowl Buddha Proteico</h3>
                <p className="text-gray-600 mb-4">
                  Quinoa, aguacate, salmón, edamame y salsa tahini. Perfecto para post-entreno y pérdida de peso.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-green-600">Low Carb</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Receta 3 - Ramen */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🍜</div>
                    <p className="font-semibold text-xl">Ramen Tonkotsu</p>
                    <p className="text-sm opacity-90">Caldo cremoso casero</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 text-white">🇯🇵 Japón</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">8h</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ramen Tonkotsu Casero</h3>
                <p className="text-gray-600 mb-4">
                  Caldo cremoso de huesos de cerdo, fideos frescos, chashu y huevo marinado. Receta auténtica paso a paso.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline">Dificultad: Alta</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Receta 4 - Ceviche */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🐟</div>
                    <p className="font-semibold text-xl">Ceviche Peruano</p>
                    <p className="text-sm opacity-90">Pescado fresco marinado</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">🇵🇪 Perú</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">25 min</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Ceviche de Pescado Clásico</h3>
                <p className="text-gray-600 mb-4">
                  Pescado fresco marinado en limón con cebolla morada, ají y cilantro. Incluye leche de tigre.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-blue-600">Sin Gluten</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Receta 5 - Curry */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🍛</div>
                    <p className="font-semibold text-xl">Curry Verde</p>
                    <p className="text-sm opacity-90">Tailandés auténtico</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-white">🇹🇭 Tailandia</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">45 min</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Curry Verde Tailandés</h3>
                <p className="text-gray-600 mb-4">
                  Pollo tierno en leche de coco con pasta de curry verde, albahaca y bambú. Receta tradicional.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-orange-600">Picante</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Receta 6 - Tiramisu */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🍰</div>
                    <p className="font-semibold text-xl">Tiramisu</p>
                    <p className="text-sm opacity-90">Postre italiano clásico</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-500 text-white">🇮🇹 Italia</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 rounded-full px-2 py-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">30 min</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tiramisu Tradicional</h3>
                <p className="text-gray-600 mb-4">
                  Mascarpone cremoso, café espresso, savoiardi y cacao. El postre perfecto con técnica profesional.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-pink-600">Postre</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-gray-600 mb-6">
              ¡Y esto es solo una pequeña muestra de las <span className="font-bold text-orange-600">1000+ recetas</span> incluidas!
            </p>
            <Button 
              onClick={handleShowSamples}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-12 py-6 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all mr-4"
            >
              📖 Ver Recetas Completas Gratis
            </Button>
            <Button 
              onClick={handlePurchase}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              🔥 Obtener Todas las Recetas - $29.99
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section Mejorado */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              🌟 ¿Por Qué Elegir Nuestro eBook?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La colección más completa y profesional de recetas internacionales 
              que transformará tu forma de cocinar para siempre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Cocina Internacional</CardTitle>
                <CardDescription className="text-lg">
                  Recetas auténticas de más de 50 países: Brasil, México, Italia, Francia, Japón, India, Tailandia y muchos más
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Recetas Fitness</CardTitle>
                <CardDescription className="text-lg">
                  +500 opciones saludables: low carb, veganas, vegetarianas, sin glúten, sin lactosa, keto y paleo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Variedad Completa</CardTitle>
                <CardDescription className="text-lg">
                  Desayunos, almuerzos, cenas, postres, bebidas, snacks y aperitivos para toda ocasión
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Para Toda la Familia</CardTitle>
                <CardDescription className="text-lg">
                  Desde recetas súper fáciles para principiantes hasta platos gourmet para chefs experimentados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-yellow-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Calidad Premium</CardTitle>
                <CardDescription className="text-lg">
                  Imágenes HD profesionales, instrucciones paso a paso y tips nutricionales de expertos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-all hover:shadow-xl group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Acceso Inmediato</CardTitle>
                <CardDescription className="text-lg">
                  Descarga instantánea después del pago. Compatible con móvil, tablet y computadora
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Mejorado */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ⭐ +2,800 Clientes Satisfechos
            </h2>
            <p className="text-xl text-gray-600">
              Lee lo que dicen las personas que ya transformaron su cocina
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 shadow-xl border-2 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg font-medium">
                  "¡Increíble variedad! He probado recetas de 15 países diferentes y todas han sido un éxito total en mi familia. Mis hijos ahora piden platos internacionales."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">María González</p>
                    <p className="text-gray-600">Chef Aficionada - Madrid</p>
                    <p className="text-sm text-orange-600 font-semibold">⭐ Cliente Verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl border-2 border-green-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg font-medium">
                  "Las recetas fitness han transformado completamente mi alimentación. Perdí 8kg en 2 meses y nunca me sentí privado de sabor."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Carlos Mendoza</p>
                    <p className="text-gray-600">Entrenador Personal - Colombia</p>
                    <p className="text-sm text-green-600 font-semibold">⭐ Cliente Verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 shadow-xl border-2 border-purple-100">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg font-medium">
                  "Perfecto para mi restaurante. Las recetas son auténticas, las explicaciones muy claras y mis clientes no paran de felicitarme."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Ana Rodríguez</p>
                    <p className="text-gray-600">Chef Profesional - Argentina</p>
                    <p className="text-sm text-purple-600 font-semibold">⭐ Cliente Verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Estadísticas de satisfacción */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2,847</div>
                <div className="text-gray-300">Clientes Felices</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">4.9</div>
                <div className="text-gray-300">Calificación Promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">24h</div>
                <div className="text-gray-300">Soporte Premium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgencia y Escasez */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ⏰ ¡Oferta Especial Termina Pronto!
            </h2>
            <p className="text-xl">
              Solo quedan <span className="font-bold text-yellow-300">47 copias</span> con descuento del 50%
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <div className="text-2xl font-bold mb-2">Precio Normal: <span className="line-through">$59.99</span></div>
              <div className="text-4xl font-bold text-yellow-300">Hoy Solo: $29.99</div>
              <div className="text-lg mt-2">¡Ahorras $30.00!</div>
            </div>
            <Button 
              onClick={handlePurchase}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            >
              🔥 Aprovechar Descuento Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & Checkout Mejorado */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              🚀 Obtén Tu Copia Ahora
            </h2>
            <p className="text-xl text-gray-600">
              Descarga inmediata • Garantía de 30 días • Soporte premium incluido
            </p>
          </div>

          {!showCheckout ? (
            <Card className="max-w-lg mx-auto border-4 border-orange-200 shadow-2xl overflow-hidden">
              <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
                <div className="space-y-4">
                  <Badge className="bg-yellow-400 text-gray-900 px-4 py-2 text-lg font-bold">
                    🏆 BESTSELLER #1
                  </Badge>
                  <CardTitle className="text-3xl font-bold">eBook Completo</CardTitle>
                  <CardDescription className="text-orange-100 text-lg">
                    Acceso inmediato y de por vida a todas las recetas
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-5xl font-bold text-gray-900">$29.99</span>
                      <div className="text-right">
                        <div className="text-2xl text-gray-500 line-through">$59.99</div>
                        <Badge className="bg-red-500 text-white">50% OFF</Badge>
                      </div>
                    </div>
                    <p className="text-green-600 font-semibold text-lg">¡Ahorras $30.00 hoy!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">+1000 recetas internacionales auténticas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">+500 recetas fitness y saludables</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">Imágenes HD profesionales</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">Descarga inmediata (PDF premium)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">Garantía de satisfacción 30 días</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg">Soporte premium incluido</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePurchase}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                  >
                    🔥 Comprar Ahora - Solo $29.99
                  </Button>

                  <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
                    <div className="flex flex-col items-center space-y-2">
                      <Shield className="w-6 h-6 text-green-500" />
                      <span className="text-center">Pago 100% Seguro</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Download className="w-6 h-6 text-blue-500" />
                      <span className="text-center">Descarga Inmediata</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <Award className="w-6 h-6 text-purple-500" />
                      <span className="text-center">Garantía 30 Días</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
                <CardTitle className="text-3xl flex items-center space-x-3">
                  <CreditCard className="w-8 h-8" />
                  <span>Finalizar Compra Segura</span>
                </CardTitle>
                <CardDescription className="text-orange-100 text-lg">
                  Completa tus datos para recibir el eBook en tu email
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-lg font-semibold">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="p-4 text-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-semibold">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="p-4 text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-lg font-semibold">Teléfono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                        className="p-4 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pais" className="text-lg font-semibold">País</Label>
                      <Input
                        id="pais"
                        name="pais"
                        value={formData.pais}
                        onChange={handleInputChange}
                        placeholder="Tu país"
                        className="p-4 text-lg"
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-semibold">El Gran Libro de las 1000 Recetas</span>
                      <span className="text-lg font-bold">$29.99</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 mb-3">
                      <span>Descuento especial (50% OFF)</span>
                      <span className="text-green-600 font-semibold">-$30.00</span>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex justify-between items-center font-bold text-2xl">
                      <span>Total a Pagar</span>
                      <span className="text-green-600">$29.99</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-6 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                      🔒 Completar Compra Segura - $29.99
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowCheckout(false)}
                      className="w-full py-4 text-lg"
                    >
                      ← Volver a la Oferta
                    </Button>
                  </div>

                  <div className="text-center space-y-2 text-gray-600">
                    <p className="flex items-center justify-center space-x-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>🔒 Pago 100% seguro y encriptado SSL</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5 text-blue-500" />
                      <span>📧 Recibirás el eBook en tu email en menos de 2 minutos</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      <span>💰 Garantía de devolución completa de 30 días</span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer Mejorado */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Recetas del Mundo</span>
              </div>
              <p className="text-gray-400 text-lg">
                La colección más completa de recetas internacionales y saludables del mundo. 
                Transforma tu cocina hoy mismo.
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400 ml-2">(2,847 reseñas)</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-xl">Contenido Premium</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>+1000 Recetas Auténticas</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>50+ Países Representados</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>500+ Recetas Fitness</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Imágenes HD Premium</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-xl">Garantías</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span>Pago 100% Seguro</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Descarga Inmediata</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Garantía 30 Días</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-400" />
                  <span>Soporte Premium 24/7</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 text-xl">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <p>📧 soporte@recetasdelmundo.com</p>
                <p>📱 WhatsApp: +1 (555) 123-4567</p>
                <p>🕒 Atención 24/7</p>
                <p>🌍 Envío digital mundial</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <p>&copy; 2024 Recetas del Mundo. Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <span>Términos de Servicio</span>
              <span>•</span>
              <span>Política de Privacidad</span>
              <span>•</span>
              <span>Reembolsos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}