import { Select, MenuItem, TextField } from "@mui/material";
import PaddingXY24 from "@/components/mine/paddingXY24";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export default async function Booking() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  let createAt = new Date(profile.data.createAt);
  const pdata = profile.data;
  return (
    <main>
      <div className=" justify-items-center grid">
        <table className="table-auto border-separate border-spacing-2 text-2xl p-[24px]  bg-lime-400/50 rounded-[32px] border-2 border-solid border-lime-950">
          <tbody>
            <tr>
              <td className="font-bold">Name</td>
              <td>{pdata.name}</td>
            </tr>
            <tr>
              <td className="font-bold">Email</td>
              <td>{pdata.email}</td>
            </tr>
            <tr>
              <td className="font-bold">Tel</td>
              <td>{pdata.tel}</td>
            </tr>
            <tr>
              <td className="font-bold">Member Since</td>
              <td>{createAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[100%] flex flex-col items-center">
        <PaddingXY24>
          <h1 className="w-[800px] font-bold text-3xl">Vaccine Booking</h1>
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px]">
          <h1 className="text-black text-2xl">Enter Your Full Name</h1>
          <TextField
            id="Name-Lastname"
            label="Name-Lastname"
            variant="standard"
            name="Name-Lastname"
            className="w-[100%]"
          />
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px]">
          <h1 className="text-black text-2xl">Enter Your Citizen ID</h1>
          <TextField
            id="Citizen ID"
            label="Citizen ID"
            variant="standard"
            name="Citizen ID"
            className="w-[100%]"
          />
        </PaddingXY24>
        <PaddingXY24 className="w-[800px] m-[24px] bg-lime-300/50 rounded-[24px] flex items-center flex-col">
          <h1 className="text-black text-2xl w-[100%]">Select a Hospital</h1>
          <div className="py-[16px] w-[100%] flex items-center flex-col">
            <Select
              variant="standard"
              name="location"
              id="hospital"
              className="w-[80%]"
            >
              <MenuItem value="CKH">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="RVH">Rajavithi Hospital</MenuItem>
              <MenuItem value="TUH">Thammasat University Hospital</MenuItem>
            </Select>
          </div>
        </PaddingXY24>
        <PaddingXY24 className="w-[640px] m-[24px] bg-lime-300/50 rounded-[24px] flex flex-row items-center justify-between">
          <h1 className="text-black text-2xl">Select Vacination Day</h1>
          <DateReserve />
        </PaddingXY24>
        <PaddingXY24>
          <button
            name="Book Vaccine"
            className="block rounded-[8px] border-2 border-lime-900 bg-lime-300 px-4 py-4 text-black hover:bg-lime-600 hover:font-bold hover:text-white hover:border-0"
          >
            Book Vaccine
          </button>
        </PaddingXY24>
      </div>
    </main>
  );
}
