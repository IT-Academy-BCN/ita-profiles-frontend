import { useState } from 'react';
import profilePicture from '../../../assets/img/stud_1.png';
import github from '../../../assets/svg/github.svg';
import linkedin from '../../../assets/svg/linkedin.svg';

const StudentData = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const studentsData = [
    {
      id: 1,
      profileDetail: {
        fullname: 'Marta Oliveras',
        subtitle: 'Full-stack developer PHP',
        socialMedia: {
          linkedin: {
            url: 'LinkedIn',
          },
          github: {
            url: 'Github',
          },
        },
        about: {
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum iste. Commodi, libero adipisci. Dignissimos consequuntur ab excepturi incidunt ducimus!',
        },
        tags: [
          'PHP',
          'Laravel',
          'SQL',
          'MongoDB',
          'Javascript',
          'React',
          'Redux',
          'Github',
          'CI/CD',
          'TDD',
        ],
      },
    },
  ];

  return (
    <div>
      {studentsData.map((student) => (
        <div key={student.id} className="flex flex-col gap-4">
          <div className="flex gap-3 mb-3">
            <img
              src={profilePicture}
              alt="Profile picture"
              className="w-32 rounded-lg"
            />
            <div className="flex w-full justify-between ">
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col ">
                    <h1 className="text-xl font-bold">
                      {student.profileDetail.fullname}
                    </h1>
                    <h2 className="text-gray-2">
                      {student.profileDetail.subtitle}
                    </h2>
                  </div>                 
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={github} alt="github icon" />
                    {student.profileDetail.socialMedia.github.url}
                  </div>
                  <div className="flex gap-1">
                    <img src={linkedin} alt="linkedin icon" />
                    {student.profileDetail.socialMedia.linkedin.url}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className="text-lg font-bold">About</h2>
            <div>
              <p className='text-sm'>
                {showFullDescription
                  ? student.profileDetail.about.description
                  : `${student.profileDetail.about.description.split(' ').slice(0, 15).join(' ')}...`}
                {!showFullDescription && (
                  <button onClick={toggleDescription} className='text-gray-3 text-sm'>
                    ver más
                  </button>
                )}
              </p>
              {showFullDescription && (
                <p className='text-sm'>
                  <button onClick={toggleDescription} className='text-gray-3 text-sm'>
                    ver menos
                  </button>
                </p>
              )}
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {student.profileDetail.tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-md bg-[#d9d8d8] px-2 py-1 text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentData;
