FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    curl git build-essential sudo \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

RUN npm install -g @anthropic-ai/claude-code happy-coder

# Create non-root user with sudo
RUN useradd -m -s /bin/bash claude && \
    echo "claude ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Create .claude directory with correct ownership
RUN mkdir -p /home/claude/.claude && chown -R claude:claude /home/claude

USER claude

WORKDIR /workspace

CMD ["/bin/bash"]