import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      status: "Active",
    },
    {
      title: "AWS System Administrator",
      issuer: "Amazon Web Services",
      status: "Active",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="p-6 md:p-8 hover-elevate" data-testid={`card-certification-${index}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-md flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-cert-title-${index}`}>
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`text-cert-issuer-${index}`}>
                    {cert.issuer}
                  </p>
                  <Badge variant="secondary" className="gap-1" data-testid={`badge-cert-status-${index}`}>
                    <CheckCircle className="w-3 h-3" />
                    {cert.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
