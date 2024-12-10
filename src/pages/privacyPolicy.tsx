import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import Container from "../components/structure/container"
import Label from "../components/text/label"
import Section from "../components/structure/section"
import Paragraph from "../components/text/paragraph"
import { SEO } from "../components/seo/seo"
import SubTitle from "../components/text/subtitle"

const Terms: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Section>
          <Container size="sm">
            <div className="relative flex flex-col pt-10 sm:pt-[100px]">
              <Label className="text-main-blue">Privacy Policy</Label>
              <Paragraph className="text-neutral-6 mb-3">
                Last Updated: August 14 th , 2023
              </Paragraph>
              <Paragraph className="text-neutral-9">
                Welcome to Flair Marketplace ("us", "we", or "our"). We are
                committed to protecting your privacy and ensuring the security
                of your personal data. This Privacy Policy outlines how we
                collect, process, use, and protect your information. Please read
                this Privacy Policy carefully. By accessing or using our
                website, you agree to this Privacy Policy.
              </Paragraph>

              <SubTitle className="mt-10">Information We Collect:</SubTitle>
              <Paragraph className="text-neutral-9">
                - Personal Information: When you subscribe to our newsletter, we
                collect your email address. This information is collected with
                your explicit consent. When you fulfill our partnership form, we
                collect your contact and company name, phone number, location,
                email and we ask you for detailed info on your used Point of
                Sale system.
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-3">
                - Automatically collected information: Including your IP
                address, browser type, operating system, and browsing behavior
                on our website.
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-3">
                - Usage Data: We use Google Analytics to collect usage data,
                such your IP address, browser type, operating system, and
                browsing behavior on our website. This helps us improve our
                website and provide a better user experience.
              </Paragraph>

              <SubTitle className="mt-10">How We Use Your Information</SubTitle>
              <Paragraph className="text-neutral-9">
                - Personalization: We use your personal information to send you
                tailored newsletters about our products/services, to respond to
                your inquiries, provide customer support, and communicate with
                you about our services. Furthermore, we use your personal
                information to send you promotional materials and updates about
                Flair Marketplace if you have subscribed to our newsletter (you
                can opt out of these communications at any time). And to analyze
                website traffic and improve our website’s performance and user
                experience.
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-3">
                - Analytics: Usage data collected through Google Analytics helps
                us analyze website traffic and improve our content.
              </Paragraph>

              <SubTitle className="mt-10">Data Sharing</SubTitle>
              <Paragraph className="text-neutral-9">
                - Third-Party Services: We share your personal information with
                third-party service providers, such as Brevo - for managing our
                mailing list and sending emails – and Google Analytics – for
                website traffic monitoring. These providers are bound by data
                processing agreements and security measures.
              </Paragraph>

              <SubTitle className="mt-10">Your Rights</SubTitle>
              <Paragraph className="text-neutral-9">
                - Access and Correction: You have the right to access and
                correct your personal data. You can do so by contact us via our
                email(see Contact Us section)
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-3">
                - Withdraw Consent: You can withdraw your consent for receiving
                newsletters at any time by unsubscribing from our emails.
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-3">
                - You can also request information about the processing of your
                data and object to the processing under certain circumstances.
              </Paragraph>

              <SubTitle className="mt-10">Data Security</SubTitle>
              <Paragraph className="text-neutral-9">
                - We implement security measures to protect your personal data
                from unauthorized access, disclosure, or loss.
              </Paragraph>

              <SubTitle className="mt-10">Data Retention</SubTitle>
              <Paragraph className="text-neutral-9 mt-3">
                - We retain your personal data for as long as necessary to
                fulfill the purposes for which it was collected, or as required
                by law.
              </Paragraph>

              <SubTitle className="mt-10">International Transfers</SubTitle>
              <Paragraph className="text-neutral-9">
                - Your data may be transferred to countries outside the EEA. We
                ensure such transfers comply with applicable data protection
                laws.
              </Paragraph>

              <SubTitle className="mt-10">
                Links to Third-Party Websites
              </SubTitle>
              <Paragraph className="text-neutral-9">
                - Our website may contain links to third-party websites or
                services, such as social media platforms and app stores. We are
                not responsible for the privacy practices or content of those
                third-party websites.
              </Paragraph>

              <SubTitle className="mt-10">Contact Us</SubTitle>
              <Paragraph className="text-neutral-9">
                - If you have questions about our privacy practices or want to
                exercise your rights, please contact us at
                customersupport@flair-marketplace.com.
              </Paragraph>

              <SubTitle className="mt-10">Changes to this Policy</SubTitle>
              <Paragraph className="text-neutral-9">
                - We may update this Privacy Policy from time to time. The
                latest version will be posted on our website.
              </Paragraph>
              <Paragraph className="text-neutral-9 mt-10">
                By using our website and providing your information, you consent
                to the practices described in this Privacy Policy.
              </Paragraph>
            </div>
          </Container>
        </Section>
      </>
    </Layout>
  )
}

export default Terms

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
