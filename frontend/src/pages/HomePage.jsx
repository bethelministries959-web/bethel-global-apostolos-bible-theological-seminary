import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
import '../styles/homepage.css';

const HomePage = () => {
  const courses = [
    {
      id: 1,
      title: 'Foundations of Christianity',
      lessons: 10,
      description: 'Explore the fundamental principles and beliefs of the Christian faith.'
    },
    {
      id: 2,
      title: 'Christian Doctrine',
      lessons: 10,
      description: 'Deep dive into essential Christian doctrines and theological foundations.'
    },
    {
      id: 3,
      title: 'Prayer and Intercession',
      lessons: 10,
      description: 'Master the art and power of effective prayer and intercession.'
    },
    {
      id: 4,
      title: 'Evangelism and Missions',
      lessons: 10,
      description: 'Learn effective strategies for sharing the gospel and missionary work.'
    },
    {
      id: 5,
      title: 'Leadership Development',
      lessons: 10,
      description: 'Develop apostolic leadership skills for kingdom impact.'
    },
    {
      id: 6,
      title: 'Old Testament Survey',
      lessons: 10,
      description: 'Comprehensive overview of Old Testament books and teachings.'
    }
  ];

  const testimonials = [
    {
      name: 'Pastor John Okafor',
      title: 'Senior Pastor, Covenant Church',
      text: 'This seminary has transformed my understanding of theology and equipped me with practical ministry skills. The curriculum is comprehensive and the instructors are highly knowledgeable.'
    },
    {
      name: 'Evangelist Maria Santos',
      title: 'Missionary, South America',
      text: 'The online format allowed me to study while actively serving in missions. The flexibility and quality of content have been exceptional.'
    },
    {
      name: 'Pastor David Mensah',
      title: 'Church Planter, Ghana',
      text: 'Bethel Seminary has been instrumental in preparing me for pastoral ministry. The certificates are recognized and respected within our fellowship.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Raising Apostolic Leaders for Kingdom Impact</h1>
          <p className="hero-tagline">Bethel Global Apostolos Bible Theological Seminary</p>
          <p>
            Founded by Prophet Ezekiel K.A. Adeleke, our Bible Correspondence School 
            offers comprehensive theological education to equip you for effective ministry.
          </p>
          <div className="hero-buttons">
            <Link to="/admissions" className="btn btn-primary btn-large">
              Start Your Journey
            </Link>
            <Link to="/courses" className="btn btn-secondary btn-large">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section container">
        <h2 className="text-center">Why Choose Bethel Seminary?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Comprehensive Curriculum</h3>
            <p>11 carefully designed courses covering all aspects of theological education.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Learn Anywhere</h3>
            <p>Study at your own pace with our flexible online Bible correspondence platform.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>Recognized Certificates</h3>
            <p>Earn valuable certificates upon course completion with verification system.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Expert Instruction</h3>
            <p>Learn from experienced theology professors and ministry leaders.</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="courses-preview">
        <div className="container">
          <h2 className="text-center">Featured Courses</h2>
          <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto var(--spacing-xl)' }}>
            Each course contains 10 comprehensive lessons with Bible study, assignments, quizzes, and certification.
          </p>
          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-card-header">
                  <h3 className="course-card-title">{course.title}</h3>
                </div>
                <div className="course-card-body">
                  <p className="course-lessons"><strong>{course.lessons}</strong> Lessons</p>
                  <p>{course.description}</p>
                  <Link to="/courses" className="btn btn-primary btn-small">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link to="/courses" className="btn btn-secondary btn-large">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          <div>
            <h2>Founded by Prophet Ezekiel K.A. Adeleke</h2>
            <p>
              With decades of theological expertise and apostolic ministry experience, 
              Prophet Ezekiel K.A. Adeleke established Bethel Global Apostolos Bible Theological Seminary 
              with a vision to raise apostolic leaders equipped for kingdom impact.
            </p>
            <p>
              His commitment to excellence in theological education has resulted in a curriculum 
              that combines biblical scholarship with practical ministry application.
            </p>
            <Link to="/founder" className="btn btn-primary">
              Learn More About Our Founder
            </Link>
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
            borderRadius: 'var(--radius-lg)',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--white)',
            fontSize: '4rem'
          }}>
            👨‍💼
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="text-center">Student Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="testimonial-title">{testimonial.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container">
        <div className="cta-section">
          <h2>Ready to Start Your Theological Journey?</h2>
          <p>
            Join thousands of students worldwide who are advancing their ministry 
            through quality theological education. Register today and begin your first course.
          </p>
          <Link to="/admissions" className="btn btn-primary btn-large">
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
