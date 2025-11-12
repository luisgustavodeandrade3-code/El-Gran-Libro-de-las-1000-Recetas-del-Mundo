'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, BookOpen, ChefHat, Globe, Zap, X } from 'lucide-react'
import { ebookData, ebookMetadata, type Recipe } from '@/lib/ebook-data'

export function EbookViewer() {
  const [selectedSection, setSelectedSection] = useState<number | null>(null)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

  const handleDownloadPDF = () => {
    // Aqui você integraria com uma biblioteca de geração de PDF
    alert('Funcionalidade de download do PDF será implementada com jsPDF ou similar')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header do eBook */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {ebookMetadata.title}
            </h1>
          </div>
          <p className="text-2xl text-gray-600 mb-6">{ebookMetadata.subtitle}</p>
          
          <div className="flex items-center justify-center space-x-6 mb-8">
            <Badge className="bg-orange-500 text-white px-4 py-2 text-lg">
              📚 {ebookMetadata.totalRecipes}+ Recetas
            </Badge>
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              🌍 {ebookMetadata.countries} Países
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              📄 {ebookMetadata.pages} Páginas
            </Badge>
          </div>

          <Button
            onClick={handleDownloadPDF}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-6 text-xl shadow-xl"
          >
            <Download className="w-6 h-6 mr-3" />
            Descargar eBook Completo (PDF)
          </Button>
        </div>

        {/* Índice de Secciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ebookData.map((section, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-orange-300"
              onClick={() => setSelectedSection(index)}
            >
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Badge className="bg-orange-500 text-white">
                  {section.recipes.length} recetas
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de Sección Seleccionada */}
        {selectedSection !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">
                    {ebookData[selectedSection].title}
                  </h2>
                  <Button
                    onClick={() => setSelectedSection(null)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-orange-100 text-lg mt-2">
                  {ebookData[selectedSection].description}
                </p>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-6">
                {ebookData[selectedSection].recipes.map((recipe) => (
                  <Card
                    key={recipe.id}
                    className="cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                      <div className="flex items-center justify-between">
                        <div className="text-4xl">{recipe.image}</div>
                        <Badge className="bg-orange-500 text-white">
                          {recipe.country}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-4">{recipe.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>⏱️ {recipe.time}</span>
                        <span>🔥 {recipe.calories}</span>
                        <span>👥 {recipe.servings}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal de Receta Seleccionada */}
        {selectedRecipe && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{selectedRecipe.image}</div>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedRecipe.title}</h2>
                      <p className="text-orange-100">{selectedRecipe.country}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedRecipe(null)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Ingredientes */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <ChefHat className="w-6 h-6 mr-2 text-orange-500" />
                      Ingredientes
                    </h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-orange-500">•</span>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instrucciones */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 mr-2 text-orange-500" />
                      Preparación
                    </h3>
                    <ol className="space-y-3">
                      {selectedRecipe.instructions.map((step, index) => (
                        <li key={index} className="flex space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Tips y Nutrición */}
                <div className="mt-8 space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-800 mb-2">💡 Consejos del Chef</h4>
                    <p className="text-yellow-700">{selectedRecipe.tips}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-2">🥗 Información Nutricional</h4>
                    <p className="text-green-700">{selectedRecipe.nutrition}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categorías del eBook */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            📚 Categorías Incluidas en el eBook
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ebookMetadata.categories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-orange-300 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">
                    {index === 0 && <Globe className="w-12 h-12 mx-auto text-orange-500" />}
                    {index === 1 && <Zap className="w-12 h-12 mx-auto text-green-500" />}
                    {index === 2 && '🌱'}
                    {index === 3 && '🌾'}
                    {index === 4 && '🍰'}
                    {index === 5 && '🍹'}
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
