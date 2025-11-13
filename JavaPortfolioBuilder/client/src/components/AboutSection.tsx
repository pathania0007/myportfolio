import { Card } from "@/components/ui/card";
import { Award, Briefcase, Code2 } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Certifications", value: "2+" },
    { icon: Code2, label: "Major Projects", value: "10+" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base md:text-lg leading-relaxed text-foreground mb-6">
              Results-driven AWS Cloud Engineer with over 5+ years of experience in designing,
              implementing, and managing cloud-based infrastructure and services on AWS.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              Adept at building scalable, secure, and high-availability architectures using core
              AWS services including EC2, S3, RDS, VPC, IAM, CloudFormation, and Lambda.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Specialized in serverless solutions, infrastructure automation, and implementing
              disaster recovery strategies across regions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 md:p-8 hover-elevate" data-testid={`card-stat-${index}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-md">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
