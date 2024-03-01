import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { Table } from '../../components/Table/Table';

export const MainPage = () => {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <section className="flex justify-evenly mt-10">
        <Aside />
        <div className="w-3/6 ">
          <h3 className="text-3xl mb-4">Cuenta Principal</h3>
          <div className=" h-24 bg-slate-100 shadow-lg  text-2xl flex items-center p-4 gap-4">
            <div className="flex bg-violet-600 rounded-md items-center justify-center h-20 p-2">
              <span className="text-3xl text-white ml-">CA</span>
              <img
                src="https://icongr.am/clarity/dollar.svg?size=128&color=currentColor"
                width={30}
              />
            </div>

            <span className="text-3xl font-semibold">$20.000</span>
          </div>
          <Table />
        </div>
      </section>
    </section>
  );
};
