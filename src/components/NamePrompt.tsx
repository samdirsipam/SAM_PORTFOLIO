import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onSave: (name: string) => void;
}

const NamePrompt = ({ onSave }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    localStorage.setItem("visitorName", name.trim());
    onSave(name.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass rounded-2xl p-8 max-w-sm w-full text-center"
      >
        <h2 className="text-xl font-semibold mb-2">
          Hey there 👋
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          What should I call you?
        </p>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-glow transition-all"
        >
          Continue
        </button>
      </motion.div>
    </motion.div>
  );
};

export default NamePrompt;
