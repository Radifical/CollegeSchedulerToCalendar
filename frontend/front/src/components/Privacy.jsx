import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-gray-100 mb-6">
            privacy policy
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            your privacy is important to us. learn how we collect, use, and protect your information.
          </p>
        </div>

        <div className="card animate-slide-up">
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-4">last updated: december 2024</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                schedule2calendar ("we," "our," or "us") is committed to protecting your privacy. 
                this privacy policy explains how we collect, use, disclose, and safeguard your 
                information when you use our web application and chrome extension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">information we collect</h2>
              
              <h3 className="text-xl font-medium text-gray-100 mb-3">personal information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                when you create an account, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>username and password (encrypted)</li>
                <li>email address (if provided)</li>
                <li>account creation date</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-100 mb-3">schedule data</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                we process but do not permanently store:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>class schedules you paste or extract</li>
                <li>course names, times, and locations</li>
                <li>temporary parsing data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-100 mb-3">usage information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                we may collect anonymous usage statistics including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>number of schedules processed</li>
                <li>feature usage patterns</li>
                <li>error logs (without personal data)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">how we use your information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                we use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>provide and maintain our service</li>
                <li>authenticate your account</li>
                <li>parse and format your schedule data</li>
                <li>generate google calendar exports</li>
                <li>improve our application and user experience</li>
                <li>communicate with you about updates or issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">data storage and security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                we take data security seriously:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>passwords are encrypted using industry-standard methods</li>
                <li>schedule data is processed in memory and not permanently stored</li>
                <li>all data transmission uses https encryption</li>
                <li>we use secure hosting services with regular security updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">third-party services</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                we integrate with the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li><strong>google calendar api:</strong> to export your schedule (you control this integration)</li>
                <li><strong>render:</strong> for hosting our application</li>
                <li><strong>chrome web store:</strong> for our browser extension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">your rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                you have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>access your personal information</li>
                <li>correct inaccurate data</li>
                <li>delete your account and associated data</li>
                <li>opt out of certain data processing</li>
                <li>export your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">cookies and tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                we use minimal cookies for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>session management (login state)</li>
                <li>user preferences</li>
                <li>basic analytics (anonymous)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                you can disable cookies in your browser, though this may affect functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">changes to this policy</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                we may update this privacy policy from time to time. we will notify you of any 
                significant changes by posting the new policy on this page and updating the 
                "last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium text-gray-100 mb-4">contact us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                if you have any questions about this privacy policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-300">
                  email: privacy@schedule2calendar.com<br />
                  github: github.com/schedule2calendar
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="btn-secondary">
              back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
