
'use client';

import { useState, useEffect } from 'react';
import type { Post } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ShareButtonsProps {
  post: Post;
  className?: string;
}

export function ShareButtons({ post, className }: ShareButtonsProps) {
  const [postUrl, setPostUrl] = useState('');

  useEffect(() => {
    setPostUrl(window.location.href);
  }, []);

  if (!postUrl) {
    return null;
  }

  const shareText = encodeURIComponent(`Check out this article: ${post.title}`);

  const createShareLink = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const socialLinks = [
    {
      platform: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`,
    },
    {
      platform: 'Twitter / X',
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${shareText}`,
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
    },
  ];

  return (
    <TooltipProvider>
      <div className={`flex items-center gap-2 ${className}`}>
        {socialLinks.map(({ platform, icon, url }) => (
          <Tooltip key={platform}>
            <TooltipTrigger asChild>
               <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary-foreground/50 text-primary-foreground/80 hover:bg-white/10 hover:text-white"
                onClick={createShareLink(url)}
                aria-label={`Share on ${platform}`}
              >
                {icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share on {platform}</p>
            </TooltipContent>
          </Tooltip>
        ))}
         <Tooltip>
            <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon" className="rounded-full border-primary-foreground/50 text-primary-foreground/80 hover:bg-white/10 hover:text-white">
                    <a href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(postUrl)}`} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                        <MessageSquare className="h-5 w-5" />
                    </a>
                </Button>
            </TooltipTrigger>
             <TooltipContent>
              <p>Share on WhatsApp</p>
            </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
