import Container from '../../../components/Container';
import { RiAdminFill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import logo from '/logo.png';
import { Helmet } from 'react-helmet-async';
import { FaUserShield } from 'react-icons/fa6';
import { toast } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [isDeleting, setIsDeleting] = useState('');

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`http://localhost:5000/users?email=${user.email}`);
    return res.json();
  });

  // make member
  const handleApprove = (user) => {
    fetch(`http://localhost:5000/users/member/${user._id}`, {
      method: 'PATCH'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const memberData = { ...user, role: 'member' };
          fetch('http://localhost:5000/member', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(memberData)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
                  method: 'DELETE'
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount > 0) {
                      refetch();
                      toast.success(`${user.name} is a Member Now`);
                    }
                  })
                  .catch((error) => {
                    toast.error(error.message);
                  });
              }
            });
        }
      })
      .catch((error) => toast.error(error.message));
  };

  // make admin
  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          toast.success(`${user.name} is an Admin Now`);
        }
      })
      .catch(error => toast.error(error.message));
  };

  // delete user
  const handleDelete = user => {
    setIsDeleting(true);

    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 1) {
          setIsDeleting(false);
          refetch();
          toast.success(`${user.name} has been removed`);
        }
      })
      .catch(error => {
        setIsDeleting(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet><title>Admin</title></Helmet>
      <Container>
        <div className="pt-28 pb-16">
          <div className='flex flex-col items-center mb-12 md:mb-4' data-aos="zoom-in" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <img src={logo} alt="" width={50} />
            <h1 className='md:text-3xl text-xl font-bold text-center uppercase text-[#136734]'>Manage users</h1>
          </div>
          <div className="rounded my-10">

            <div className="md:text-2xl uppercase md:pl-[52px] pl-2 font-semibold flex gap-2">
              <p>Total users: </p>
              <span>{users.length}</span>
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
                    <th className="text-[17px] bg-[#136734] text-center">Actions Role</th>
                    <th className="text-[17px] bg-[#136734] text-center rounded-r">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) =>
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
                      <td className="text-center flex gap-2 mt-3">
                        <button
                          onClick={() => handleApprove(user)} disabled={user.role === 'member'}
                          className="btn btn-outline text-[#136734] hover:bg-[#136734] normal-case"
                        >
                          <FaUserShield className='text-[#59BB4D] hidden md:block' /> Approve
                        </button>

                        <button
                          onClick={() => handleMakeAdmin(user)} disabled={user.role === 'admin'}
                          className="btn btn-outline text-[#136734] hover:bg-[#136734] normal-case"
                        >
                          <RiAdminFill className='text-green-600 hidden md:block' /> Admin
                        </button>
                      </td>
                      <td className='text-center'>
                        <button
                          onClick={() => handleDelete(user)}
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
    </>
  );
};

export default Dashboard;