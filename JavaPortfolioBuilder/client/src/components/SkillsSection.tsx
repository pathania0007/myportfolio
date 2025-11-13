import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Shield, Cog, Network, Database, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Cloud,
      category: "Cloud Services",
      skills: ["EC2", "Lambda", "S3", "RDS", "DynamoDB", "VPC", "Route 53", "AWS Organization"],
    },
    {
      icon: Shield,
      category: "Security",
      skills: ["IAM", "KMS", "AWS Config", "Security Groups", "NACLs", "WAF"],
    },
    {
      icon: Cog,
      category: "Automation",
      skills: ["CloudFormation", "Terraform", "Step Functions", "API Gateway"],
    },
    {
      icon: Network,
      category: "Networking",
      skills: ["VPC Peering", "VPN", "Transit Gateway", "Direct Connect"],
    },
    {
      icon: Database,
      category: "Migration",
      skills: ["Application Discovery Service", "Migration Hub", "Database Migration Service"],
    },
    {
      icon: Terminal,
      category: "Programming",
      skills: ["Python", "Bash", "C", "C++", "Docker", "EKS", "Kubernetes"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 md:p-8 hover-elevate" data-testid={`card-skill-${index}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-md">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground" data-testid={`text-category-${index}`}>
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="font-mono text-xs"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
