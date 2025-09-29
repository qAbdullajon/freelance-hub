"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  GraduationCap,
  Heart,
  Package,
  ShoppingCart,
  Utensils,
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Zap,
  Clock,
  Smartphone,
  Brain,
  Settings,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const navigate = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Freelance Hub</span>
            </div>

            {/* <nav className="hidden md:flex items-center space-x-8">
              <Link href="#xizmatlar" className="text-sm font-medium hover:text-primary transition-colors">
                Xizmatlar
              </Link>
              <Link href="#missiya" className="text-sm font-medium hover:text-primary transition-colors">
                Missiya
              </Link>
              <Link href="#afzalliklar" className="text-sm font-medium hover:text-primary transition-colors">
                Afzalliklar
              </Link>
              <Link href="#aloqa" className="text-sm font-medium hover:text-primary transition-colors">
                Aloqa
              </Link>
            </nav> */}

            <Button onClick={() => navigate.push('https://t.me/qAbdullajon')} className="bg-primary hover:bg-primary/90">Bepul konsultatsiya</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                <Zap className="h-3 w-3 mr-1" />
                Raqamli Transformatsiya
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                Freelance Hub - Biznesingizni <span className="text-primary">Raqamli Kelajakka</span> Olib Chiqamiz
              </h1>

              <p className="text-xl text-muted-foreground text-pretty mb-8">
                Biznes jarayonlarini avtomatlashtirish va samaradorlikni oshirish orqali muvaffaqiyatga erishish uchun
                ishonchli hamkoringiz. Biz sizning biznesingizni zamonaviy texnologiyalar bilan kuchaytirish uchun
                keldik.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate.push('https://t.me/qAbdullajon')} size="lg" className="bg-primary cursor-pointer hover:bg-primary/90">
                  Biz bilan Bog'lanish
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button onClick={() => navigate.push('https://drive.usercontent.google.com/uc?id=1viflTwRrNjoZhmzMePLt7aV_PK8uUX2_&authuser=0&export=download')} size="lg" variant="outline">
                  Batafsil ma'lumot
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="Raqamli biznes dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="missiya" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bizning Missiyamiz va Maqsadimiz</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Biz faqat dasturiy ta'minot yaratmaymiz - biz sizning biznesingiz uchun to'liq raqamli ekotizim quramiz.
              Har bir loyiha mijozning ehtiyojlariga moslashtirilgan va kelajakda kengaytirilishi mumkin bo'lgan dinamik
              platforma sifatida ishlab chiqiladi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Settings className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Biznes Avtomatlashtirish</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Biznesmenlar va tadbirkorlarning ish jarayonlarini zamonaviy IT yechimlari orqali avtomatlashtirish va
                  samaradorligini oshirish
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Raqamli Transformatsiya</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  An'anaviy biznes jarayonlarini raqamli platformalarga o'tkazish orqali raqobatbardoshlikni ta'minlash
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Innovatsion Yechimlar</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Har bir soha uchun maxsus ishlab chiqilgan CRM, online savdo va boshqaruv tizimlari yaratish
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education CRM Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <GraduationCap className="h-3 w-3 mr-1" />
                Ta'lim Sohasi
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ta'lim Muassasalari Uchun CRM Tizimi</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Nima Uchun CRM Kerak?</h3>
                <p className="text-muted-foreground mb-6">
                  Zamonaviy ta'lim tizimida o'quvchilar, o'qituvchilar va ota-onalarni bir platformada birlashtiradigan
                  tizim zarur. Bizning CRM platformamiz barcha ta'lim jarayonlarini avtomatlashtiradi va nazoratni
                  yaxshilaydi.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">O'quv markazlar va maktablar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Bolalar bog'chalari</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Til o'rgatish kurslari</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Kasbiy ta'lim markazlari</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/crm.jpg"
                alt="Ta'lim CRM tizimi"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Education Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">O'quvchilar Boshqaruvi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Davomat yuritish, baholarni kiritish, vazifalarni topshirish va dars yozuvlarini qayta ko'rish
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                  <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">O'qituvchilar Boshqaruvi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dars jadvali tuzish, yuklama nazorati, oylik hisobotlarni avtomatik yaratish
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                  <ShoppingCart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">To'lov Tizimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Payme, Click, Uzum orqali avtomatik to'lovlar va qarzdorlik monitoringi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Avtomatik Ogohlantirishlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  SMS, Telegram bot orqali eslatmalar va o'z vaqtida xabardor qilish tizimi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Retail Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/shop.jpg"
                alt="Savdo markazlari tizimi"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Savdo Markazlari va Supermarketlar Uchun Keng Qamrovli Tizim
              </h2>

              <p className="text-muted-foreground mb-8">
                Katta savdo markazlari uchun maxsus ishlab chiqilgan bu tizim Karzinka, Havas, Makro kabi brendlar
                ehtiyojlarini to'liq qondiradi. Mijozlar bazasi, bonus tizimi va soliq integratsiyasi bilan to'liq
                ta'minlanadi.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ko'p Filialli Boshqaruv</h3>
                    <p className="text-muted-foreground text-sm">
                      Har bir filial uchun alohida kassa tizimi, lekin barcha ma'lumotlar yagona platformadan nazorat
                      qilinadi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ombor Nazorati</h3>
                    <p className="text-muted-foreground text-sm">
                      Mahsulot kirim-chiqimi, qoldiq va muddati tugayotgan mahsulotlarni avtomatik kuzatish
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Online Magazin</h3>
                    <p className="text-muted-foreground text-sm">
                      Mijozlar sayt yoki mobil ilova orqali buyurtma berib, delivery xizmatidan foydalanish
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tibbiyot Muassasalari Uchun Raqamli Boshqaruv</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-lg">Bemorlarni Ro'yxatga Olish</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Qabul jadvalini avtomatlashtirish, har bir shifokorning bandlik jadvali aniq ko'rinadi
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">Online Navbat Tizimi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Bemorlar navbatni ilova yoki web orqali oldindan band qilish imkoniyati
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-lg">Elektron Tibbiy Kartalar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Bemor tarixi, retseptlar, tahlillar va shifokor yozuvlari elektron shaklda saqlash
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-lg">To'lov va Statistika</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Barcha to'lovlar nazorati, qarzdorlik kuzatuvi va klinika statistikalari
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/medical.webp"
                alt="Tibbiyot CRM tizimi"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ombor va Logistika Kompaniyalari Uchun Avtomatlashtirish
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/logistics.webp"
                alt="Logistika tizimi"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ombor Avtomatlashtirish</h3>
                    <p className="text-muted-foreground">
                      Mahsulotlarning kirim-chiqimi, qoldiq soni va yaroqlilik muddatini avtomatik yuritish
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 dark:text-green-400 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Buyurtmalarni Kuzatish</h3>
                    <p className="text-muted-foreground">
                      Mijoz buyurtmasini real vaqt rejimida kuzatish - kelib tushganidan yetkazib berilguniga qadar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transport Boshqaruvi</h3>
                    <p className="text-muted-foreground">
                      Avtomobillar yo'nalishi, yoqilg'i xarajatlari va haydovchilar yuklamasini nazorat qilish
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-card rounded-lg border">
                <h4 className="font-semibold mb-4">Qo'shimcha Imkoniyatlar</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Real vaqtda eslatmalar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Batafsil analitika</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">1C, ERP integratsiyasi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Xavfsiz ma'lumot saqlash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kafe va Restoranlar Uchun To'liq Avtomatlashtirish</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-2">
                      <ShoppingCart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <CardTitle className="text-lg">POS Tizimi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Buyurtmalarni qabul qilish, tezkor hisob-kitob va chek chiqarish tizimi
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-2">
                      <Utensils className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-lg">Menyu Boshqaruvi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Yangi taomlar qo'shish, narxlarni o'zgartirish va aksiyalarni kiritish
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-2">
                      <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-lg">Delivery Xizmati</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Onlayn buyurtma va kuryerlar uchun real vaqt kuzatuvi
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-lg">Stol Boshqaruvi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Band stollar va ofitsiantlar faoliyatini kuzatish tizimi
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/pos.avif"
                alt="Restoran tizimi"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="afzalliklar" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bizning Ustunliklarimiz va Qo'shimcha Xizmatlar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Smartphone className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Mobil Ilovalar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Android va iOS uchun maxsus ilovalar ishlab chiqish. Mijozlar va foydalanuvchilar uchun qulay
                  interfeys
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">AI va Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Sun'iy intellekt asosida tahlil va prognozlash. Biznes ko'rsatkichlarini yaxshilash bo'yicha
                  tavsiyalar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <Settings className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Integratsiya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Mavjud tizimlar bilan integratsiya: 1C, ERP, CRM va boshqa platformalar bilan ulanish
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">24/7 Qo'llab-quvvatlash</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Texnik yordam, muntazam yangilanishlar va xavfsizlik ta'minoti. Biznesingiz to'xtamasdan ishlashiga
                  kafolat
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                  Dinamik Rivojlanish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Barcha platformalarimiz dinamik, ya'ni sizning talabingizga qarab keyinchalik qo'shimcha imkoniyatlar
                  qo'shib boriladi. Bu sizning biznesingiz o'sishi bilan tizim ham rivojlanishini ta'minlaydi.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-primary" />
                  Texnik Qo'llab-quvvatlash
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  24/7 texnik yordam, muntazam yangilanishlar va xavfsizlik ta'minoti. Sizning biznesingiz to'xtamasdan
                  ishlashiga kafolat beramiz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hamkorlik Uchun Taklif</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bizning maqsadimiz - sizning biznesingizni raqamli transformatsiya orqali yangi bosqichga olib chiqish.
              Qisqa suhbat yoki uchrashuv belgilasak bo'ladimi?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Bepul Konsultatsiya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Biznesingizni tahlil qilib, eng mos yechimni taklif qilamiz. Loyiha xarajatlari va amalga oshirish
                  muddatlarini aniqlaymiz
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl">Demo Versiya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tizimning qanday ishlashini ko'rsatish uchun demo versiya taqdim etamiz. Siz o'zingiz sinab
                  ko'rishingiz mumkin
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl">Bosqichma-bosqich Joriy Etish</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tizimni bosqichma-bosqich joriy etish orqali xodimlarni o'rgatish va muammosiz o'tish ta'minlaymiz
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Mamnun mijozlar</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-primary-foreground/80">Ish samaradorligi oshishi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Qo'llab-quvvatlash</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Tizim ishonchliligi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="aloqa" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Biznesingizni bugun raqamlashtiring</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Batafsil ma'lumot olish va loyihani muhokama qilish uchun biz bilan bog'laning. Har bir biznes uchun
              individual yondashuvni ta'minlaymiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate.push('https://t.me/qAbdullajon')} size="lg" className="bg-primary hover:bg-primary/90">
                Bepul konsultatsiya
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => navigate.push('tel:+998906307705')} size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                +998 90 630 77 05
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Freelance Hub</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Biznesingizni raqamli kelajakka olib chiqish bo'yicha ishonchli hamkor
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">4.9/5 reyting</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Xizmatlar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Ta'lim CRM tizimi</li>
                <li>Tibbiyot CRM</li>
                <li>Savdo markazlari</li>
                <li>Logistika CRM</li>
                <li>Restoran CRM</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kompaniya</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Biz haqimizda</li>
                <li>Jamoa</li>
                <li>Portfolio</li>
                <li>Yangiliklar</li>
                <li>Karyera</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Aloqa</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li onClick={() => navigate.push('tel:+998906307705')} className="cursor-pointer flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+998 90 630 77 05</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>abdullajonq6@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Toshkent, O'zbekiston</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Freelance Hub. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
