import EmailLayout from "@/emails/components/EmailLayout";

export default function EarlyAccessConfirmationEmail() {
  return (
    <EmailLayout
      eyebrow="Early access"
      title="You’re on the list."
      ctaLabel="Visit webvium.com"
      ctaUrl="https://www.webvium.com"
    >
      <p style={{ margin: 0 }}>
        Thanks for joining Webvium early access. You’re now among the first to
        hear about what we’re building and what’s coming next.
      </p>
      <p style={{ margin: "16px 0 0" }}>
        We’re focused on making Webvium simple, fast, and genuinely useful. When
        something new is ready to explore, you’ll be one of the first to know.
      </p>
      <p style={{ margin: "16px 0 0" }}>
        Thanks for being here early. We’re excited to have you along for the
        journey.
      </p>
    </EmailLayout>
  );
}
