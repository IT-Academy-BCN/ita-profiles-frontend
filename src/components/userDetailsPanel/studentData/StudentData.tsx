import profilePicture from '../../../assets/img/stud_1.png';
import bookmark from '../../../assets/svg/bookmark.svg';
import email from '../../../assets/svg/email.svg';
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
            url: 'GitHub',
          },
          github: {
            url: 'LinkedIn',
          }
        },
        about: {
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum iste. Commodi, libero adipisci. Dignissimos consequuntur ab excepturi incidunt ducimus!",
        },
        tags: ['PHP', 'Laravel', 'SQL', 'MongoDB', 'Javascript', 'React', 'Redux', 'Github', 'CI/CD', 'TDD']
      },
    }

  ]


  return (
    <div>
      <h3 className="text-2xl font-bold text-black-3">Detalles Perfil</h3>
      {studentsData.map((student) => (
        <div key={student.id} className='flex flex-col gap-4'>
          <div className='flex'>
            <img src={profilePicture} alt="Profile picture" className='rounded-lg' />
            <div className='flex'>
              <div>
                <h1 className='text-xl font-bold'>{student.profileDetail.fullname}</h1>
                <h2 className='font-semibold text-gray-2'>{student.profileDetail.subtitle}</h2>
              </div>
              <div className='border-2 flex'>
                <img src={bookmark} alt="bookmark icon" />
                <img src={email} alt="email icon" />
              </div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex gap-1'><img src={github} alt="" />{student.profileDetail.socialMedia.github.url}</div>
            <div className='flex gap-1'><img src={linkedin} alt="" />{student.profileDetail.socialMedia.linkedin.url}</div>
          </div>

          <h2 className='text-md font-bold'>About</h2>
          <p>{student.profileDetail.about.description}</p>
          <ul className='flex flex-wrap gap-1'>
            {student.profileDetail.tags.map((tag, index) => (
              <li key={index} className='rounded-md bg-gray-4-base px-2 py-1 text-sm'>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StudentData;
