'use client'

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const JsonLocalStorage = ({ updateServerStorage }) => {
    const [key, setKey] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [savedData, setSavedData] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        // Load data from local storage when the key changes
        if (key) {
            const storedData = localStorage.getItem(key);
            if (storedData) {
                setSavedData(storedData);
                setJsonData(storedData);
            } else {
                setSavedData('');
                setJsonData('');
            }
        }
    }, [key]);

    const handleSave = () => {
        try {
            // Attempt to parse the JSON to validate it
            JSON.parse(jsonData);

            // If parsing succeeds, save to local storage
            localStorage.setItem(key, jsonData);
            updateServerStorage(key, jsonData);
            setSavedData(jsonData);
            setError('');
        } catch (e) {
            setError('Invalid JSON format');
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <h2 className="text-2xl font-bold">JSON Local Storage</h2>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="key" className="block text-sm font-medium text-gray-700">
                            Storage Key:
                        </label>
                        <Input
                            id="key"
                            type="text"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder="Enter storage key"
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="jsonInput" className="block text-sm font-medium text-gray-700">
                            JSON Data:
                        </label>
                        <textarea
                            id="jsonInput"
                            value={jsonData}
                            onChange={(e) => setJsonData(e.target.value)}
                            placeholder="Enter JSON data"
                            className="mt-1 w-full h-32 p-2 border rounded-md"
                        />
                    </div>
                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    {savedData && (
                        <div>
                            <h3 className="text-lg font-semibold">Saved Data:</h3>
                            <pre className="bg-gray-100 p-2 rounded-md overflow-auto">{savedData}</pre>
                        </div>
                    )}
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handleSave} disabled={!key}>Save to Local Storage</Button>
            </CardFooter>
        </Card>
    );
};

export default JsonLocalStorage;