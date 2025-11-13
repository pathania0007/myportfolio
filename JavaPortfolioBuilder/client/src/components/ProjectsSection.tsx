import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "VPN Peering Setup",
      description: "Established secure connection between on-premises infrastructure and AWS through VPN peering, enabling hybrid cloud architecture with seamless network connectivity.",
      techStack: ["VPN", "VPC", "Route 53", "AWS Transit Gateway"],
      outcomes: "Enhanced security and reduced latency for hybrid workloads",
    },
    {
      title: "S3 Lifecycle Management",
      description: "Implemented automated lifecycle policies for S3 objects to optimize storage costs by transitioning data to S3 Glacier for long-term archiving while maintaining accessibility.",
      techStack: ["S3", "S3 Glacier", "CloudWatch", "Lambda"],
      outcomes: "Achieved 60% cost reduction in storage expenses",
    },
    {
      title: "Transit Gateway Configuration",
      description: "Set up AWS Transit Gateway for communication between private resources across multiple VPCs, creating a scalable hub-and-spoke network architecture.",
      techStack: ["Transit Gateway", "VPC", "Route Tables", "Security Groups"],
      outcomes: "Simplified network management across 10+ VPCs",
    },
    {
      title: "Lift-and-Shift Migration",
      description: "Successfully migrated on-premises applications and databases to AWS Cloud using Application Discovery Service and Database Migration Service with minimal downtime.",
      techStack: ["AWS MGN", "DMS", "EC2", "RDS", "S3"],
      outcomes: "Completed migration of 15+ applications with 99.9% uptime",
    },
    {
      title: "Chenani Nashri Tunnel Project",
      description: "Managed IT infrastructure including Microsoft Active Directories, networking equipment, and AWS-based backup and disaster recovery solutions for critical tunnel operations.",
      techStack: ["EC2", "S3", "AWS Backup", "EBS Snapshots", "CloudWatch"],
      outcomes: "Ensured zero data loss with automated backup strategies",
    },
    {
      title: "Serverless Architecture",
      description: "Designed and implemented serverless solutions using AWS Lambda, API Gateway, DynamoDB, and Step Functions for scalable and cost-effective application deployment.",
      techStack: ["Lambda", "API Gateway", "DynamoDB", "Step Functions"],
      outcomes: "Reduced operational costs by 70% with auto-scaling",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 md:p-8 hover-elevate group" data-testid={`card-project-${index}`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-base leading-relaxed text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="font-mono text-xs"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-primary font-medium" data-testid={`text-project-outcome-${index}`}>
                  {project.outcomes}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
