import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import AnimatedSection from '../components/common/AnimatedSection';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const TermsOfService = () => {
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
        <title>Terms of Service | Bhardwaj Architect</title>
        <meta name="description" content="Terms of Service of Bhardwaj Architect - Learn about the terms and conditions that govern your use of our services." />
      </Helmet>
      
      {/* Header */}
      <div className="bg-bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Terms of Service</h1>
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
              title="1. Acceptance of Terms"
              alignment="left"
              underline={true}
            />
            
            <p>
              By accessing or using the website and services of Bhardwaj Architect ("we," "our," or "us"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
            
            <SectionHeading 
              title="2. Services Description"
              alignment="left"
              underline={true}
            />
            
            <p>
              Bhardwaj Architect provides architectural design, interior design, urban planning, landscape design, project management, 
              3D visualization, and consulting services. The specific deliverables, timelines, and fees for each project will be outlined in a 
              separate agreement or proposal.
            </p>
            
            <SectionHeading 
              title="3. Client Responsibilities"
              alignment="left"
              underline={true}
            />
            
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information necessary for project execution</li>
              <li>Review and provide feedback on designs and documents in a timely manner</li>
              <li>Make payments according to the agreed-upon schedule</li>
              <li>Obtain necessary permits and approvals unless otherwise specified in the agreement</li>
              <li>Respect intellectual property rights and confidentiality provisions</li>
            </ul>
            
            <SectionHeading 
              title="4. Intellectual Property Rights"
              alignment="left"
              underline={true}
            />
            
            <p>
              All designs, drawings, specifications, documents, and other materials created by Bhardwaj Architect remain our intellectual property 
              until full payment has been received. Upon complete payment, clients receive a license to use these materials for the intended project only.
            </p>
            
            <p>
              We retain the right to use images and descriptions of completed projects for marketing and portfolio purposes, unless otherwise agreed in writing.
            </p>
            
            <SectionHeading 
              title="5. Payment Terms"
              alignment="left"
              underline={true}
            />
            
            <p>
              Payment schedules, methods, and amounts will be specified in the project agreement. General terms include:
            </p>
            <ul>
              <li>A non-refundable deposit is typically required to initiate work</li>
              <li>Milestone payments throughout the project lifecycle</li>
              <li>Final payment due upon project completion</li>
              <li>Late payments may incur additional fees and work suspension</li>
              <li>Taxes are not included in our fees unless explicitly stated</li>
            </ul>
            
            <SectionHeading 
              title="6. Project Changes and Modifications"
              alignment="left"
              underline={true}
            />
            
            <p>
              Changes requested after design approval may incur additional fees and extend timelines. All modifications must be submitted 
              in writing and approved by both parties. Major changes may require a revised agreement.
            </p>
            
            <SectionHeading 
              title="7. Project Timeline and Delays"
              alignment="left"
              underline={true}
            />
            
            <p>
              While we strive to meet all project deadlines, delays may occur due to:
            </p>
            <ul>
              <li>Client-requested changes</li>
              <li>Delayed client feedback or decision-making</li>
              <li>Regulatory approval processes</li>
              <li>Force majeure events</li>
            </ul>
            
            <p>
              We will communicate any anticipated delays promptly and work to minimize their impact.
            </p>
            
            <SectionHeading 
              title="8. Termination of Services"
              alignment="left"
              underline={true}
            />
            
            <p>
              Either party may terminate the service agreement with written notice under the following conditions:
            </p>
            <ul>
              <li>Material breach of the agreement not remedied within 30 days</li>
              <li>Non-payment of fees</li>
              <li>Bankruptcy or insolvency</li>
              <li>Force majeure events extending beyond 60 days</li>
            </ul>
            
            <p>
              Upon termination, the client is responsible for payment of services rendered up to the termination date.
            </p>
            
            <SectionHeading 
              title="9. Limitation of Liability"
              alignment="left"
              underline={true}
            />
            
            <p>
              Bhardwaj Architect's liability is limited to the total fees paid for the project. We are not liable for indirect, 
              consequential, incidental, or special damages, including lost profits or business interruption.
            </p>
            
            <SectionHeading 
              title="10. Confidentiality"
              alignment="left"
              underline={true}
            />
            
            <p>
              We maintain strict confidentiality regarding client information and project details. Similarly, clients agree not to disclose 
              our proprietary methodologies, designs, and business information to third parties.
            </p>
            
            <SectionHeading 
              title="11. Dispute Resolution"
              alignment="left"
              underline={true}
            />
            
            <p>
              Any disputes arising from our services will first be addressed through good-faith negotiation. If unresolved, disputes will proceed 
              to mediation and, if necessary, binding arbitration according to the laws of Maharashtra, India.
            </p>
            
            <SectionHeading 
              title="12. Governing Law"
              alignment="left"
              underline={true}
            />
            
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of Maharashtra, India, without regard to its 
              conflict of law principles.
            </p>
            
            <SectionHeading 
              title="13. Amendments to Terms"
              alignment="left"
              underline={true}
            />
            
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. 
              Your continued use of our services constitutes acceptance of the modified terms.
            </p>
            
            <SectionHeading 
              title="14. Contact Information"
              alignment="left"
              underline={true}
            />
            
            <p>
              If you have questions or concerns about these Terms of Service, please contact us at:
            </p>
            <p className="mb-8">
              <strong>Email:</strong> legal@bhardwajarchitect.com<br />
              <strong>Phone:</strong> +91-8700683138<br />
              <strong>Address:</strong> 123 Architecture Avenue, Delhi, India
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

export default TermsOfService;