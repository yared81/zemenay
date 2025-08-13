import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Users, Star, Clock } from 'lucide-react';

interface GameCardProps {
  game: {
    id: string;
    title: string;
    description: string;
    category: string;
    players: number;
    maxPlayers: number;
    rating: number;
    duration: string;
    image: string;
  };
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">{game.category}</p>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg line-clamp-2">{game.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {game.description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{game.players}-{game.maxPlayers} players</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Star className="w-4 h-4" />
            <span>{game.rating}/5 rating</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{game.duration}</span>
          </div>
        </div>
        
        <Button className="w-full" variant="outline">
          Play Now
        </Button>
      </CardContent>
    </Card>
  );
}
