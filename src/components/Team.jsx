import React from 'react';
import '../App.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Julian Rivera",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Architectural Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Interior Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=400&fit=crop"
    }
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <span className="team-tag">CREATIVE MINDS</span>
        <h2 className="team-title">Meet our design experts</h2>
        <p className="team-subtitle">
          Our team is dedicated to bringing minimal and functional art into your home.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
              <div className="team-social-overlay">
                <a href="#">In</a>
                <a href="#">Tw</a>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;