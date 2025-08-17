import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
interface AnalyticsCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export function AnalyticsCard({ title, description, children, className = "" }: AnalyticsCardProps) {
  return (
    <Card className={`bg-white shadow-sm rounded-2xl ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}