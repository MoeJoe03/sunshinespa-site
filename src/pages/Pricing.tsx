import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
const Pricing = () => {
  const massages = [{
    name: "Aroma therapy full body",
    min30: "R150",
    min60: "R250",
    min90: "R350"
  }, {
    name: "Thai hot oil full body",
    min30: "R200",
    min60: "R300",
    min90: "R400"
  }, {
    name: "Deep tissue",
    min30: "R250",
    min60: "R350",
    min90: "R450"
  }, {
    name: "Sports",
    min30: "R250",
    min60: "R350",
    min90: "R450"
  }, {
    name: "Pre-natal pregnancy",
    min30: "R250",
    min60: "R350",
    min90: "R450"
  }, {
    name: "Back, neck & shoulder",
    min30: "R150",
    min60: "R250",
    min90: "R350"
  }, {
    name: "Head massage",
    min30: "R150",
    min60: "-",
    min90: "-"
  }, {
    name: "Foot massage & scrub",
    min30: "R150",
    min60: "-",
    min90: "-"
  }, {
    name: "Hand massage & scrub",
    min30: "R150",
    min60: "-",
    min90: "-"
  }, {
    name: "Kids/teens massage",
    min30: "R150",
    min60: "R200",
    min90: "R250"
  }];
  const cupping = [{
    name: "Dry cupping",
    price: "R150"
  }, {
    name: "Wet/sunnah cupping",
    price: "R300"
  }];
  const bodyTreatments = [{
    name: "Full body scrub",
    min30: "R200",
    min60: "R300"
  }];
  const facials = [{
    name: "Classic facial",
    price: "R200"
  }];
  const hairTreatments = [{
    name: "Scalp detox & hair steaming treatment",
    price: "R250"
  }];
  const combos = ["Neck, back & shoulder 30 min massage or aroma therapy full body 30 min massage + 30 min body scrub R300", "Full body 60 min massage + dry cupping R350", "Full body 60 min massage + wet cupping R500", "Foot massage + scrub & scalp detox & hair steaming treatment R300", "Pre-natal pregnancy 60 min massage + foot massage & scrub + facial R600"];
  return <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground font-playfair">
              Price List
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-sunrise mx-auto mb-4 sm:mb-6 rounded-full" />
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm sm:text-base md:text-lg">   071 117 4675 | 062 166 7239</p>
              <p className="text-sm sm:text-base md:text-lg">  120 Rose Avenue Ext 1</p>
            </div>
          </div>

          {/* Massages */}
          <Card className="mb-6 sm:mb-8 border-none shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-playfair">Massages</CardTitle>
              <CardDescription className="text-sm sm:text-base">Choose your preferred duration</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] sm:w-[50%] text-xs sm:text-sm">Treatment</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">30m</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">60m</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">90m</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {massages.map((massage, idx) => <TableRow key={idx}>
                      <TableCell className="font-medium text-xs sm:text-sm">{massage.name}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min30}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min60}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min90}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Surcharge of R50 extra for all massages for men!!!
              </p>
            </CardContent>
          </Card>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Cupping */}
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-playfair">Cupping</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {cupping.map((service, idx) => <TableRow key={idx}>
                        <TableCell className="font-medium text-sm sm:text-base">{service.name}</TableCell>
                        <TableCell className="text-right font-semibold text-primary text-sm sm:text-base">{service.price}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Body Treatments */}
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-playfair">Body Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs sm:text-sm">Treatment</TableHead>
                      <TableHead className="text-center text-xs sm:text-sm">30m</TableHead>
                      <TableHead className="text-center text-xs sm:text-sm">60m</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bodyTreatments.map((treatment, idx) => <TableRow key={idx}>
                        <TableCell className="font-medium text-sm sm:text-base">{treatment.name}</TableCell>
                        <TableCell className="text-center text-sm sm:text-base">{treatment.min30}</TableCell>
                        <TableCell className="text-center text-sm sm:text-base">{treatment.min60}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Facials */}
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-playfair">Facials</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {facials.map((service, idx) => <TableRow key={idx}>
                        <TableCell className="font-medium text-sm sm:text-base">{service.name}</TableCell>
                        <TableCell className="text-right font-semibold text-primary text-sm sm:text-base">{service.price}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Hair Treatments */}
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-playfair">Hair Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {hairTreatments.map((service, idx) => <TableRow key={idx}>
                        <TableCell className="font-medium text-sm sm:text-base">{service.name}</TableCell>
                        <TableCell className="text-right font-semibold text-primary text-sm sm:text-base">{service.price}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Spa Combo Deals */}
          <Card className="border-none shadow-glow bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-playfair">Spa Combo Deals</CardTitle>
              <CardDescription className="text-sm sm:text-base px-4">
                Special packages for the ultimate wellness experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {combos.map((combo, idx) => <div key={idx} className="p-3 sm:p-4 rounded-lg bg-background/60 border border-border/50 hover:shadow-elegant transition-all duration-300">
                    <p className="text-foreground text-sm sm:text-base">
                      <span className="font-semibold text-primary mr-2">{idx + 1}.</span>
                      {combo}
                    </p>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Instagram CTA */}
          <div className="text-center mt-10 sm:mt-12 animate-fade-in-up px-4">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Follow us on Instagram{" "}
              <a href="https://instagram.com/headoffice_bylutfeyah" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-secondary transition-colors break-all sm:break-normal">
                @headoffice_bylutfeyah
              </a>
              {" "}for our monthly specials
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Pricing;