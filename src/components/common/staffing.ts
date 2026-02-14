import { type StaticImageData } from "next/image";
import adkes from "@/assets/pimpinan/be/adkes.png";
import keuangan from "@/assets/pimpinan/be/keuangan.png";
import advokastra from "@/assets/pimpinan/be/advokastra.png";
import ppm from "@/assets/pimpinan/be/ppm.png";
import psdo from "@/assets/pimpinan/be/psdo.png";
import ekraf from "@/assets/pimpinan/be/ekraf.png";
import kominfo from "@/assets/pimpinan/be/kominfo.png";
import mikat from "@/assets/pimpinan/be/mikat.png";

import sekretaris from "@/assets/pimpinan/dp/sekretaris.png";
import bendahara from "@/assets/pimpinan/dp/bendahara.png";
import baleg from "@/assets/pimpinan/dp/baleg.png";
import komisi from "@/assets/pimpinan/dp/komisi.png";
import burta from "@/assets/pimpinan/dp/burta.png";

export type Staff = {
  id: string;
  name: string;
};

export type DepartmentBadan = {
  id: number;
  name: string;
  kepala: {
    name: string;
    phone: string;
    image: string;
    metadata: {
      skill: string;
      stats: number;
      description: string;
    };
  };
  staff: Staff[];
};

export const departmentBadan: DepartmentBadan[] = [
  {
    id: 1,
    name: "Departemen Adkes",
    kepala: {
      name: "Firzah Ghania",
      phone: "+6287726737902",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/adkes.png",
      metadata: {
        skill: "LPJ",
        stats: 1,
        description: "Selalu terhubung dengan Sekum, biar semua rencana jadi nyata dan seru",
      },
    },
    staff: [
      {
        id: "01",
        name: "Aldi Mardiansah",
      },
      {
        id: "02",
        name: "Dwicky Chandra Rianto",
      },
      {
        id: "03",
        name: "Irenia Maisa Kamila",
      },
      {
        id: "04",
        name: "Muhammad Faisal Anwar",
      },
      {
        id: "05",
        name: "Rahel Aghni Nadhira",
      },
    ],
  },
  {
    id: 2,
    name: "Keuangan",
    kepala: {
      name: "Resti Fujianti",
      phone: "+6285866521392",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/keuangan.png",
      metadata: {
        skill: "Duit",
        stats: 2,
        description: "Kami yang ngatur alur duit biar semuanya on track, efisien, dan no tipu-tipu.",
      },
    },
    staff: [
      { id: "01", name: "Aghniya Rizky Amalia" },
      { id: "02", name: "Najla Azizah Gunawan" },
      { id: "03", name: "Najwa Aidatul Karomah" },
      { id: "04", name: "Rizky Wicaksono" },
    ],
  },
  {
    id: 3,
    name: "Advokastra",
    kepala: {
      name: "Dzaky Alfiansyah",
      phone: "+6289523394944",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/advo.png",
      metadata: {
        skill: "Demo",
        stats: 3,
        description: "Sering jadi pihak ketiga tapi bukan orang ketiga.",
      },
    },
    staff: [
      { id: "01", name: "Akbar Maulana" },
      { id: "02", name: "Azka Athallah Asadul Usud" },
      { id: "03", name: "Gaitha Sahna Nafeesa" },
      { id: "04", name: "Muhammad Nawab Rasyid" },
      { id: "05", name: "Reza Febryan" },
    ],
  },
  {
    id: 4,
    name: "PPM",
    kepala: {
      name: "Mukhammad Vicky",
      phone: "+628989011081",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/ppm.png",
      metadata: {
        skill: "Rakyat",
        stats: 4,
        description: "Wadahnya Mahasiswa RPL untuk mengabdi ke masyarakat.",
      },
    },
    staff: [
      { id: "01", name: "Aziz Hardiyan" },
      { id: "02", name: "Firdaus Akmal Budiman" },
      { id: "03", name: "Muhammad Azzuri Sulthan Aulia Wahab" },
      { id: "04", name: "Salwa Nur Amelia Suhendar" },
      { id: "05", name: "Utami Trisna Kinanti" },
      { id: "06", name: "Muhammad Rizky Fadhilah" },
    ],
  },
  {
    id: 5,
    name: "PSDO",
    kepala: {
      name: "Kautsar",
      phone: "+6285156468331",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/psdo.png",
      metadata: {
        skill: "Cape",
        stats: 5,
        description: "Kami bukan cuma bikin acara, kami juga bikin trauma... tapi yang bisa dijual di CV kamu!",
      },
    },
    staff: [
      {
        id: "01",
        name: "Berlianda Muhammad Putra",
      },
      {
        id: "02",
        name: "Lina Lisnawati",
      },
      {
        id: "03",
        name: "Muhammad Arkan Athaya",
      },
      {
        id: "04",
        name: "Muhammad Arfa Ghaisan",
      },
      {
        id: "05",
        name: "Rafli Ahmad Fauzi",
      },
      {
        id: "06",
        name: "Zahra Amelia Ramadhani",
      },
    ],
  },
  {
    id: 6,
    name: "EKRAF",
    kepala: {
      name: "Mirachel Cindejona",
      phone: "+628986942714",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/ekraf.png",
      metadata: {
        skill: "Dagang",
        stats: 6,
        description: "Bukan sekadar jualan atau hanya berkreasi, tapi kami membantu membentuk mental wirausaha sejati.",
      },
    },
    staff: [
      { id: "01", name: "Alfan Aditiansyah" },
      { id: "02", name: "Atsiila Kaysa Asyraf" },
      { id: "03", name: "Muhammad Abyan Daryansyah" },
      { id: "04", name: "Muhammad Fadil Tallei" },
      { id: "05", name: "Rifqi Alfyanto Khaiirunnas" },
    ],
  },
  {
    id: 7,
    name: "KOMINFO",
    kepala: {
      name: "Bintang Kurniawan",
      phone: "+6287823151803",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/kominfo.png",
      metadata: {
        skill: "Dokum",
        stats: 7,
        description: "Bersama KOMINFO membangun negeri",
      },
    },
    staff: [
      { id: "01", name: "Januar Haykal Firdaus" },
      { id: "02", name: "Luthfi Aaziz Fadhlulloh" },
      { id: "03", name: "Mario Brasco Putra Hamdani" },
      { id: "04", name: "Muhammad Dzhafa Abdulrahman" },
      { id: "05", name: "Muhammad Fadhil As-Syamil" },
      { id: "06", name: "Rifa Mazharul Haq Dini Hari Putra" },
    ],
  },
  {
    id: 8,
    name: "MIKAT",
    kepala: {
      name: "Nabil Rizky",
      phone: "+62895385300554",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/be/mikat.png",
      metadata: {
        skill: "Minat",
        stats: 8,
        description: "Hadir sebagai wadah bagi mahasiswa RPL untuk menyalurkan minat dan bakatnya!",
      },
    },
    staff: [
      { id: "01", name: "Adi Surya Nugroho" },
      { id: "02", name: "Ahmad Fuad Mubarak" },
      { id: "03", name: "Keidjaru Axiro" },
      { id: "04", name: "Muhammad Ihsan Ansori" },
      { id: "05", name: "Muhammad Ikbal Ramadhan" },
      { id: "06", name: "Muhammad Naufal Hadrian" },
      { id: "07", name: "Ray Immanuel Darmawan" },
      { id: "08", name: "Razka Attar Mizandi" },
    ],
  },
  {
    id: 9,
    name: "Sekretaris DP",
    kepala: {
      name: "Malyhah Azizah",
      phone: "+6285971738143",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/dp/sekretarisdp.png",
      metadata: {
        skill: "Surat",
        stats: 9,
        description: "Dari zona tak terlihat, yang bekerja tanpa sorotan.",
      },
    },
    staff: [{ id: "01", name: "Syifa Indah Handriani" }],
  },
  {
    id: 10,
    name: "Bendahara DP",
    kepala: {
      name: "Hilmi Mithwa",
      phone: "+6281222130032",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/dp/bendaharadp.png",
      metadata: {
        skill: "Duit",
        stats: 10,
        description: "Aku Bendum! Ada, tapi sering dianggap nggak ada.",
      },
    },
    staff: [{ id: "01", name: "Jofi Tri Fathan Afiq" }],
  },
  {
    id: 11,
    name: "BALEG",
    kepala: {
      name: "Mursyid Daniswara",
      phone: "+628119223717",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/dp/baleg.png",
      metadata: {
        skill: "Sidang",
        stats: 11,
        description: "Sang pembuat aturan",
      },
    },
    staff: [
      { id: "01", name: "Irena Silmi Azizah" },
      { id: "02", name: "Muhamad Rizki" },
      { id: "03", name: "Rafa Mirza Firdaus" },
      { id: "04", name: "Najahah Patin" },
    ],
  },
  {
    id: 12,
    name: "BURTA",
    kepala: {
      name: "Fikri Raditya",
      phone: "+6285174081352",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/dp/burta.png",
      metadata: {
        skill: "Open Bid",
        stats: 12,
        description: "Piket woyy",
      },
    },
    staff: [
      { id: "01", name: "Jilan Rokan Ragheb Arwa" },
      { id: "02", name: "Kresna Hono Putro" },
      { id: "03", name: "Nandana Rafi Ardika" },
      { id: "04", name: "Zahran Faiz Salman" },
      { id: "05", name: "Janitra Alvito Zahir" },
    ],
  },
  {
    id: 13,
    name: "KOMISI",
    kepala: {
      name: "Vina Nur Nisa",
      phone: "+6285802937316",
      image: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/pimpinan-2026/dp/komisi.png",
      metadata: {
        skill: "Admin",
        stats: 13,
        description: "Si pengawas setia yang memastikan kinerja Badan Eksekutif tetap lurus sesuai visi dan misi HIMARPL.",
      },
    },
    staff: [
      { id: "01", name: "Aloudya Fathya Azzahra" },
      { id: "02", name: "Aziza Putri Amelia" },
      { id: "03", name: "Fursan Nahr" },
      { id: "04", name: "Luthfil Hadi Surya Pangestu" },
      { id: "05", name: "Muhammad Rayyan Firmansyah" },
      { id: "06", name: "Muhammad Yasir Royyan" },
      { id: "07", name: "Moch. Rafie Candra Fahrizal" },
      { id: "08", name: "Natasya Ramadhani" },
      { id: "09", name: "Niranti Salmanabilah" },
      { id: "10", name: "Raden Hamizan Rizky Kusuma" },
      { id: "11", name: "Rifa Fachri Ramadhan" },
      { id: "12", name: "Haidar Atqiya Rahman" },
      { id: "13", name: "Lazzuardi Langga Duta Wijaya" },
    ],
  },
];
