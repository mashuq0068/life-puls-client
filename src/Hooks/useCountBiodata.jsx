
import { useEffect } from "react";
import useCountBiodata from "./useCountBiodata";

const MyComponent = () => {
  const getCountBiodata = useCountBiodata();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await getCountBiodata();
        console.log("Count of biodata:", count);
        // Do something with the count, e.g., update state or UI
      } catch (error) {
        // Handle errors, e.g., log or show an error message
        console.error("Error fetching count of biodata:", error);
      }
    };

    fetchData();
  }, [getCountBiodata]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
