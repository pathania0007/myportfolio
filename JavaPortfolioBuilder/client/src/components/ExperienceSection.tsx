import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "JARP",
      role: "AWS Cloud Engineer",
      location: "Noida",
      period: "Feb 2024 - Nov 2024",
      achievements: [
        "Designed, deployed, and managed scalable and highly available infrastructure on AWS using EC2, S3, RDS, Lambda, VPC, VPC peering, and VPN peering",
        "Managed backups, disaster recovery, and high availability architecture across regions using S3 versioning and Cross-Region replication",
        "Implemented serverless solutions with AWS Lambda, API Gateway, DynamoDB, and Step Functions",
        "Monitored infrastructure using CloudWatch, CloudTrail, and AWS Config with proactive alerts and log analysis",
      ],
    },
    {
      company: "Simplilearn",
      role: "SR Inside Sales Specialist (Cloud Consultant)",
      location: "Bengaluru",
      period: "Nov 2022 - Feb 2024",
      achievements: [
        "Generated and qualified leads through calls, emails, and demos for AWS & Azure cloud programs",
        "Conducted virtual consultations and product demonstrations to educate customers on cloud program features",
        "Assessed customer needs and recommended tailored cloud solutions based on requirements",
        "Handled full sales cycle from prospecting to closing deals ensuring exceptional customer experience",
      ],
    },
    {
      company: "Burfee Solution",
      role: "IT Engineer",
      location: "Jammu",
      period: "Jan 2018 - Apr 2022",
      achievements: [
        "Managed Microsoft Active Directories and networking equipment for Chenani Nashri Tunnel project",
        "Implemented backup and disaster recovery solutions in AWS Cloud",
        "Set up and optimized S3 buckets with lifecycle policies for cost-effective long-term archiving using S3 Glacier",
        "Designed automated backup strategies using AWS Backup and S3 Versioning for critical data",
        "Utilized EBS snapshots for quick recovery and environment cloning with automated schedules",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:ml-16" data-testid={`card-experience-${index}`}>
                <div className="absolute -left-20 top-6 hidden md:flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>

                <Card className="p-6 md:p-8 hover-elevate">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-primary mt-1" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span data-testid={`text-period-${index}`}>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span data-testid={`text-location-${index}`}>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                        data-testid={`text-achievement-${index}-${achIndex}`}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
