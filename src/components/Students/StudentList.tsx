import { useState } from 'react';
import StudentModal from './StudentModal';
import { v4 as uuidv4 } from 'uuid';
import { Student } from '../../interfaces/Students';

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selected, setSelected] = useState<Student | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (data: Student) => {
    if (data.id) {
      setStudents(students.map((s) => (s.id === data.id ? data : s)));
    } else {
      setStudents([...students, { ...data, id: uuidv4() }]);
    }
    setShowModal(false);
    setSelected(undefined);
  };

  const handleEdit = (student: Student) => {
    setSelected(student);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className='p-6 max-w-7xl mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold'>Student List</h2>
        <button
          onClick={() => setShowModal(true)}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        >
          Add Student
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-300 rounded-md shadow-sm'>
          <thead className='bg-gray-100 text-left'>
            <tr>
              <th className='px-4 py-2'>First Name</th>
              <th className='px-4 py-2'>Last Name</th>
              <th className='px-4 py-2'>Age</th>
              <th className='px-4 py-2'>Gender</th>
              <th className='px-4 py-2'>Class</th>
              <th className='px-4 py-2'>Email</th>
              <th className='px-4 py-2'>Mobile</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students
              .sort((a, b) => a.firstName.localeCompare(b.firstName))
              .map((s) => (
                <tr key={s.id} className='border-t hover:bg-gray-50'>
                  <td className='px-4 py-2'>{s.firstName}</td>
                  <td className='px-4 py-2'>{s.lastName}</td>
                  <td className='px-4 py-2'>
                    {new Date().getFullYear() - new Date(s.dob).getFullYear()}
                  </td>
                  <td className='px-4 py-2'>{s.gender}</td>
                  <td className='px-4 py-2'>{s.class}</td>
                  <td className='px-4 py-2'>{s.email}</td>
                  <td className='px-4 py-2'>{s.mobile}</td>
                  <td className='px-4 py-2 space-x-2'>
                    <button
                      onClick={() => handleEdit(s)}
                      className='text-blue-600 hover:text-blue-800'
                      title='Edit'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className='text-red-600 hover:text-red-800'
                      title='Delete'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <StudentModal
          student={selected}
          onClose={() => {
            setShowModal(false);
            setSelected(undefined);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default StudentList;
