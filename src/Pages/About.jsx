import React from "react";

const About = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen assistant-font1">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6 drop-shadow-md">
        About the Club Fest
      </h1>
      <p className="text-gray-800 text-lg mb-10 leading-relaxed max-w-3xl mx-auto">
        Our club fest is a celebration of creativity, innovation, and community.
        Explore a variety of events and connect with like-minded individuals.
        Radio NITroz is the official entertainment club of the National Institute
        of Technology (NIT) Durgapur, established in 2006. It serves as a vibrant
        platform for students to engage in various creative and cultural activities,
        fostering a sense of community and spirit within the institute.
      </p>
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Meet Our Team
      </h2>
      <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto">
        <li className="text-lg text-blue-600">Subham Ghosh - President</li>
        <li className="text-lg text-blue-600">Nabina Layek - Vice President</li>
        <li className="text-lg text-blue-600">Debashish Panigrahi - General Secretary</li>
        <li className="text-lg text-blue-600">Vineet Jeengar - Treasurer</li>
        <li className="text-lg text-blue-600">Kens Venkateshwarulu - Convener</li>
        <li className="text-lg text-blue-600">Rajeev Kumar Yadav - Tech Head</li>
        <li className="text-lg text-blue-600">Ainket Kamble - Logistics Head</li>
        <li className="text-lg text-blue-600">Basab Lekhri - Web D Head</li>
        <li className="text-lg text-blue-600">Priyal Bhalerao - Event Head</li>
      </ul>
    </div>
  );
};

export default About;
 