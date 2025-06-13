import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/common/AnimatedSection';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const PrivacyPolicy = () => {
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4
      }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Privacy Policy | Bhardwaj Architect</title>
        <meta name="description" content="Privacy Policy of Bhardwaj Architect - Learn about how we collect, use, and protect your personal information." />
      </Helmet>
      
      {/* Header */}
      <div className="bg-bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-text-light text-center mt-4 max-w-2xl mx-auto">
            Last updated: July 1, 2023
          </p>
        </div>
      </div>
      
      {/* Content */}
      <AnimatedSection className="section bg-bg" animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            <SectionHeading 
              title="Our Commitment to Privacy"
              alignment="left"
              underline={true}
            />
            
            <p>
              At Bhardwaj Architect, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our services.
            </p>
            
            <SectionHeading 
              title="Information We Collect"
              alignment="left"
              underline={true}
            />
            
            <p>We may collect the following types of information:</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Personal Information</h3>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information provided in project briefs or consultations</li>
              <li>Communication records with our team</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Technical Information</h3>
            <ul>
              <li>IP address and browser information</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
              <li>Referring website</li>
            </ul>
            
            <SectionHeading 
              title="How We Use Your Information"
              alignment="left"
              underline={true}
            />
            
            <p>We use the collected information for various purposes including:</p>
            <ul>
              <li>Providing and maintaining our services</li>
              <li>Responding to inquiries and requests</li>
              <li>Sending project updates and communications</li>
              <li>Improving our website and services</li>
              <li>Marketing and promotional activities (with consent)</li>
              <li>Compliance with legal obligations</li>
            </ul>
            
            <SectionHeading 
              title="Information Sharing and Disclosure"
              alignment="left"
              underline={true}
            />
            
            <p>
              We may share your information with third parties only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>With service providers who assist in our operations</li>
              <li>When required by law</li>
              <li>To protect our rights and the safety of users</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
            
            <SectionHeading 
              title="Data Security"
              alignment="left"
              underline={true}
            />
            
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <SectionHeading 
              title="Your Rights"
              alignment="left"
              underline={true}
            />
            
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            
            <SectionHeading 
              title="Cookies and Tracking Technologies"
              alignment="left"
              underline={true}
            />
            
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, 
              and personalize content. You can manage your cookie preferences through your browser settings.
            </p>
            
            <SectionHeading 
              title="Children's Privacy"
              alignment="left"
              underline={true}
            />
            
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
              from children. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>
            
            <SectionHeading 
              title="Changes to This Privacy Policy"
              alignment="left"
              underline={true}
            />
            
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
              on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <SectionHeading 
              title="Contact Us"
              alignment="left"
              underline={true}
            />
            
            <p>
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at:
            </p>
            <p className="mb-8">
              <strong>Email:</strong> privacy@bhardwajarchitect.com<br />
              <strong>Phone:</strong> +91-8700683138<br />
              <strong>Address:</strong> 123 Architecture Avenue, delhi,  India
            </p>
            
            <div className="mt-12 flex justify-center">
              <Button to="/" variant="primary">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </motion.div>
  );
};

export default PrivacyPolicy;