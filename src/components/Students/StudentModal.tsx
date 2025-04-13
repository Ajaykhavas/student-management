import { Student } from '../../interfaces/Students';
import StudentForm, { StudentFormValues } from './StudentForm';

interface Props {
  student?: Student;
  onClose: () => void;
  onSave: (student: Student) => void;
}

const StudentModal = ({ student, onClose, onSave }: Props) => {
  const handleFormSubmit = (data: StudentFormValues) => {
    const studentWithId: Student = {
      ...data,
      id: student?.id || '',
    };
    onSave(studentWithId);
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-[#000000b8] bg-opacity-30 z-50'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4'
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className='text-2xl font-semibold text-center mb-4'>
          {student ? 'Edit Student' : 'Add Student'}
        </h3>
        <StudentForm
          defaultValues={student}
          onSubmit={handleFormSubmit}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};

export default StudentModal;
