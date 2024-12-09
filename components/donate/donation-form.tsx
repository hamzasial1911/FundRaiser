"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getStripe } from "@/lib/stripe";
import { Heart } from "lucide-react";

const DONATION_AMOUNTS = [10, 25, 50, 100, 250, 500];

export function DonationForm() {
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleDonation = async () => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      if (!stripe) throw new Error("Stripe failed to initialize");
      console.log("Processing donation of $", amount);
      setLoading(false);
    } catch (error) {
      console.error("Error processing donation:", error);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-lg mb-4 block">Select Amount</Label>
        <RadioGroup
          defaultValue={amount.toString()}
          onValueChange={(value) => {
            setAmount(parseInt(value));
            setCustomAmount("");
          }}
          className="grid grid-cols-3 gap-4"
        >
          {DONATION_AMOUNTS.map((value) => (
            <div key={value}>
              <RadioGroupItem
                value={value.toString()}
                id={`amount-${value}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`amount-${value}`}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                ${value}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="custom-amount">Custom Amount</Label>
        <div className="relative mt-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
          <Input
            id="custom-amount"
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount(parseInt(e.target.value) || 0);
            }}
            className="pl-8"
          />
        </div>
      </div>

      <Button
        onClick={handleDonation}
        disabled={loading || amount <= 0}
        className="w-full"
        size="lg"
      >
        {loading ? (
          "Processing..."
        ) : (
          <>
            Donate ${amount}
            <Heart className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </div>
  );
}
