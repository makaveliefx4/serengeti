import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig";

type Booking = {
  id: string;
  name: string;
  email: string;
  createdAt: Date | null;
};

export default function BookingsList() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            email: data.email,
            createdAt: data.createdAt ? data.createdAt.toDate() : null,
          };
        });
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
      setLoading(false);
    }

    fetchBookings();
  }, []);

  if (loading) return <p>Loading bookings...</p>;
  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map(({ id, name, email, createdAt }) => (
          <li key={id} style={{ marginBottom: 12 }}>
            <strong>{name}</strong> ({email})<br />
            <small>{createdAt ? createdAt.toLocaleString() : "No date"}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
