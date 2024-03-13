import profilePicture from '../../../assets/img/stud_1.png';
import bookmark from '../../../assets/svg/bookmark.svg';
import email from '../../../assets/img/mail-gray.png';
import github from '../../../assets/svg/github.svg';
import linkedin from '../../../assets/svg/linkedin.svg';

const StudentData = () => {
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
                    <h2 className=" text-gray-2">
                      {student.profileDetail.subtitle}
                    </h2>
                  </div>

                  <div className=" hidden items-center gap-2  lg:flex ">
                    <img
                      src={bookmark}
                      alt="bookmark icon"
                      className="h-6 w-6"
                    />
                    <img src={email} alt="email icon" className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex gap-4 ">
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
          
          <h2 className="text-md font-bold">About</h2>
          <p>{student.profileDetail.about.description}</p>
          <ul className="flex flex-wrap gap-1">
            {student.profileDetail.tags.map((tag, index) => (
              <li
                key={index}
                className="rounded-md bg-gray-4-base px-2 py-1 text-sm"
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
