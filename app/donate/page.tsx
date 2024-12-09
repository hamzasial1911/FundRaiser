import { Card } from "@/components/ui/card";
import { DonationForm } from "@/components/donate/donation-form";

export default function DonatePage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Make a Donation
          </h1>
          <DonationForm />
        </Card>
      </div>
    </div>
  );
}
