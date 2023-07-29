import { useEffect, useState } from 'react';
import logo from '/logo.png';
import Container from '../../../components/Container';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { ScaleLoader } from 'react-spinners';
import useAuth from '../../../hooks/useAuth';

const Member = () => {
  const { user } = useAuth();
  const [isDeleting, setIsDeleting] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const { data: members = [], refetch } = useQuery(['members'], async () => {
    const res = await fetch(`https://ruec-server.vercel.app/members?email=${user.email}`);
    return res.json();
  });

  // remove member
  const handleDelete = (id) => {
    setIsDeleting(true);

    fetch(`https://ruec-server.vercel.app/members/admin/${id._id}`, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Member has been removed');
        } else {
          toast.error(data.message);
        }
        setIsDeleting(false);
      })
      .catch(error => {
        setIsDeleting(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ScaleLoader color="#136734" size={150} />
        </div>
      ) : (
        <Container>
          <div className="pt-28 pb-16">
            <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
              <img src={logo} alt="" width={50} />
              <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Manage members</h1>
            </div>
            <div className="rounded my-10">

              <div className="md:text-2xl uppercase md:pl-[52px] pl-2 font-semibold flex gap-2">
                <p>Total members: </p>
                <span>{members.length}</span>
              </div>

              <div className="overflow-x-auto w-full mt-4">
                <table className="table w-11/12 mx-auto">
                  {/* head */}
                  <thead>
                    <tr className='text-white'>
                      <th className="text-[20px] bg-[#136734] text-center rounded-l">#</th>
                      <th className="text-[17px] bg-[#136734] text-center">Profile</th>
                      <th className="text-[17px] bg-[#136734] text-center">Name</th>
                      <th className="text-[17px] bg-[#136734] text-center">Email</th>
                      <th className="text-[17px] bg-[#136734] text-center">Phone</th>
                      <th className="text-[17px] bg-[#136734] text-center">Department</th>
                      <th className="text-[17px] bg-[#136734] text-center">Session</th>
                      <th className="text-[17px] bg-[#136734] text-center">Position</th>
                      <th className="text-[17px] bg-[#136734] text-center rounded-r">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members?.map((user, index) =>
                      <tr key={user._id}>
                        <th>
                          {index + 1}
                        </th>
                        <td className='text-center'>
                          <div className="avatar">
                            <div className="mask w-16">
                              <img src={user.photo} alt="Avatar" className='rounded-full' />
                            </div>
                          </div>
                        </td>
                        <td className='text-center font-semibold'>{user.name} </td>
                        <td className='text-center font-semibold'>{user.email}</td>
                        <td className='text-center font-semibold'>{user.phone}</td>
                        <td className='text-center font-semibold'>{user.department}</td>
                        <td className='text-center font-semibold'>{user.session}</td>
                        <td className="text-center font-semibold">
                          {user.role === 'member' ? (
                            <span className="text-[#59BB4D] font-semibold">Member</span>
                          ) : user.role === 'admin' ? (
                            <span className="text-green-500 font-semibold">Admin</span>
                          ) : (
                            <span className="text-red-500 font-semibold">Pending</span>
                          )}
                        </td>
                        <td className='text-center'>
                          <button
                            onClick={() => { handleDelete(user); }}
                            className="btn btn-outline text-[#136734] hover:bg-[#136734] normal-case flex flex-col justify-center items-center mt-1"
                          >
                            <FaTrashAlt className='text-red-500 hidden md:block' /> {isDeleting ? 'Wait..' : 'Remove'}
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Member;