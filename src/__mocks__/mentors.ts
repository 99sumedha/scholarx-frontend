import type { Mentor } from '../types';

export const mentors: Mentor[] = [
  {
    mentor_id: 1,
    created_at: '2023-07-01',
    updated_at: '2023-07-10',
    state: 'approved',
    category: 'Technology',
    application: {
      designation: 'Software Engineer',
      country: 'United States',
      company_or_institution: 'Google',
      areas_of_expertise: 'Web Development',
      expectations_from_mentees: 'Commitment and eagerness to learn',
      mentoring_philosophy: 'Empowering mentees to reach their full potential',
      commitment_to_program: true,
      previous_experience_as_mentor: true,
      reason_for_being_mentor: 'To give back to the community',
      cv_link: 'https://example.com/cv',
    },
    availability: true,
    profile: {
      created_at: new Date('2021-07-05T00:00:00.000Z'),
      updated_at: new Date('2021-07-06T00:00:00.000Z'),
      primary_email: 'mentor1@example.com',
      contact_email: 'mentor1@example.com',
      first_name: 'John',
      last_name: 'Doe',
      image_url: 'https://xsgames.co/randomusers/avatar.php?g=male',
      linkedin_url: 'https://linkedin.com/in/mentor1',
      type: 'DEFAULT',
      uuid: 'abc123',
    },
  },
  {
    mentor_id: 2,
    created_at: '2023-07-02',
    updated_at: '2023-07-12',
    state: 'approved',
    category: 'Business',
    application: {
      designation: 'Chief Marketing Officer',
      country: 'Canada',
      company_or_institution: 'Facebook',
      areas_of_expertise: 'Marketing',
      expectations_from_mentees: 'Proactive attitude and willingness to learn',
      mentoring_philosophy:
        'Sharing practical insights for professional growth',
      commitment_to_program: true,
      previous_experience_as_mentor: false,
      reason_for_being_mentor: 'Passion for supporting aspiring entrepreneurs',
      cv_link: 'https://example.com/cv',
    },
    availability: true,
    profile: {
      created_at: new Date('2021-07-05T00:00:00.000Z'),
      updated_at: new Date('2021-07-06T00:00:00.000Z'),
      primary_email: 'mentor2@example.com',
      contact_email: 'mentor2@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      image_url: 'https://xsgames.co/randomusers/avatar.php?g=female',
      linkedin_url: 'https://linkedin.com/in/mentor2',
      type: 'DEFAULT',
      uuid: 'def456',
    },
  },
  {
    mentor_id: 3,
    created_at: '2023-07-03',
    updated_at: '2023-07-12',
    state: 'approved',
    category: 'Design',
    application: {
      designation: 'UI/UX Designer',
      country: 'United Kingdom',
      areas_of_expertise: 'UI/UX Design',
      company_or_institution: 'Facebook',
      expectations_from_mentees: 'Attention to detail and creativity',
      mentoring_philosophy: 'Creating user-centric designs',
      commitment_to_program: true,
      previous_experience_as_mentor: true,
      reason_for_being_mentor: 'To inspire and educate aspiring designers',
      cv_link: 'https://example.com/cv',
    },
    availability: true,
    profile: {
      created_at: new Date('2021-07-05T00:00:00.000Z'),
      updated_at: new Date('2021-07-06T00:00:00.000Z'),
      primary_email: 'mentor3@example.com',
      contact_email: 'mentor3@example.com',
      first_name: 'Emily',
      last_name: 'Johnson',
      image_url: '',
      linkedin_url: 'https://linkedin.com/in/mentor3',
      type: 'DEFAULT',
      uuid: 'ghi789',
    },
  },
];
