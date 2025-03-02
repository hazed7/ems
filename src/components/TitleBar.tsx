"use client";

import { getCurrentWindow } from "@tauri-apps/api/window";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { Minus, X } from "lucide-react";
import { useCallback } from "react";

export function TitleBar() {
    const minimizeWindow = useCallback(async () => {
        const appWindow = getCurrentWindow();
        await appWindow.minimize();
    }, []);

    const closeWindow = useCallback(async () => {
        const appWindow = getCurrentWindow();
        await appWindow.close();
    }, []);

    return (
        <div
            data-tauri-drag-region
            className="h-10 flex items-center justify-between bg-card/80 border-b px-3"
        >
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary/60"></div>
                <span className="text-xs font-medium">Finitum</span>
            </div>

            <div className="flex items-center">
                <TooltipProvider delayDuration={200}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={minimizeWindow}
                            >
                                <Minus className="h-3.5 w-3.5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Minimize</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
                                onClick={closeWindow}
                            >
                                <X className="h-3.5 w-3.5" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Close</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    );
}