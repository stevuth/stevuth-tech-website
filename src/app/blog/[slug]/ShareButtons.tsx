
'use client';

import { useState, useEffect } from 'react';
import type { Post } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';

interface ShareButtonsProps {
  post: Post;
}

export function ShareButtons({ post }: ShareButtonsProps) {
  const [postUrl, setPostUrl] = useState('');

  useEffect(() => {
    // Ensure window is available before using it
    setPostUrl(window.location.href);
  }, []);

  if (!postUrl) {
    // Render nothing or a placeholder until the URL is available client-side
    return null;
  }

  const shareText = encodeURIComponent(`Check out this article: ${post.title}`);

  const createShareLink = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-transparent text-primary-foreground/80 hover:bg-white/10 hover:text-white border-primary-foreground/30">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={createShareLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`)}>
          <Facebook className="mr-2 h-4 w-4" /> Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={createShareLink(`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${shareText}`)}>
          <Twitter className="mr-2 h-4 w-4" /> Twitter / X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={createShareLink(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`)}>
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(postUrl)}`} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
