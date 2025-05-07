
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    learning: "Small changes compound into remarkable results. The power of building systems over setting goals.",
    status: "completed"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    learning: "Mental toughness is built through embracing discomfort and pushing past perceived limits.",
    status: "completed"
  },
  {
    title: "Psychology of Money",
    author: "Morgan Housel",
    learning: "Financial decisions are personal and shaped by our unique experiences. Consistency and time are key to wealth building.",
    status: "completed"
  },
  {
    title: "Wings of Fire",
    author: "APJ Abdul Kalam",
    learning: "Vision, determination, and hard work can overcome any obstacle. The importance of dreams in shaping one's future.",
    status: "completed"
  },
  {
    title: "The Secret",
    author: "Rhonda Byrne",
    learning: "The power of positive thinking and law of attraction in manifesting our desires.",
    status: "completed"
  },
  {
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    learning: "True happiness comes from inner peace and personal growth, not material possessions.",
    status: "completed"
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    learning: "Genuine interest in others and empathy are key to building lasting relationships.",
    status: "completed"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    learning: "Focused, distraction-free work is crucial for producing high-value results.",
    status: "reading"
  }
];

const Books = () => {
  return (
    <section id="books" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Books I Read</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {books.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Book className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold text-blue-800">{book.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
                <p className="text-gray-700">{book.learning}</p>
                {book.status === "reading" && (
                  <div className="mt-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Currently Reading
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
