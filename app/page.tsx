'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VetnRollPatientTracker() {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: "",
    species: "",
    weight: "",
    diagnosis: "",
    treatment: ""
  });

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const addPatient = () => {
    if (newPatient.name && newPatient.species) {
      setPatients([...patients, { ...newPatient, id: Date.now() }]);
      setNewPatient({ name: "", species: "", weight: "", diagnosis: "", treatment: "" });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Vet’n’Roll — Учёт пациентов</h1>
      <Card>
        <CardContent className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <Input name="name" placeholder="Кличка" value={newPatient.name} onChange={handleChange} />
            <Input name="species" placeholder="Вид (кошка, собака...)" value={newPatient.species} onChange={handleChange} />
            <Input name="weight" placeholder="Вес (кг)" value={newPatient.weight} onChange={handleChange} />
            <Input name="diagnosis" placeholder="Диагноз" value={newPatient.diagnosis} onChange={handleChange} />
            <Input name="treatment" placeholder="Назначения" value={newPatient.treatment} onChange={handleChange} />
          </div>
          <Button onClick={addPatient}>Добавить пациента</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {patients.map((p) => (
          <Card key={p.id} className="bg-white">
            <CardContent className="space-y-2 pt-4">
              <p><strong>Кличка:</strong> {p.name}</p>
              <p><strong>Вид:</strong> {p.species}</p>
              <p><strong>Вес:</strong> {p.weight} кг</p>
              <p><strong>Диагноз:</strong> {p.diagnosis}</p>
              <p><strong>Назначения:</strong> {p.treatment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
